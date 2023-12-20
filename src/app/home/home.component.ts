import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imageObject: Array<object> = [];
    path = 'bharatmatrimony-logo';
    title = 'angularmatrimony';

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        this.http.get("/assets/profile.json").subscribe(res => {
            let image = Object.values(res)[0];
            let title = Object.values(res)[2];
            image.map((img: any, index: number) => {
                this.imageObject.push({
                    image: img,
                    thumbImage: img,
                    title: title[index]
                });
            });
        });
    }

    recomendPageNavigate() {
        this.router.navigateByUrl('recomended');
    }
}
