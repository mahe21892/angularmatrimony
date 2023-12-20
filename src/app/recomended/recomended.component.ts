import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {
  path!: string;
  index: number=0;
  image!: any;
  content!: string;
  name!: string;
  profileName!: any;
  profileContent!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/recommend.json').subscribe(res => {
      this.image = Object.values(res)[0];
      this.profileName = Object.values(res)[1];
      this.profileContent = Object.values(res)[2];
      this.selectRecomendProfile(this.index);
    })
  }

  /**
   * 
   * @param n
   * Based on selection recomend the profile 
   */
  selectRecomendProfile(n: Number) {
    this.image.map((img: any, index: number) => {
      if (index == n) {
        this.path = img;
        this.name = this.profileName[index];
        this.content = this.profileContent[index];
        this.index = index;
      }
    });
  }
  
  /**
   * Interested function to intertest the profile
   */
  intersted() {
    alert('Profile Intersted');
    this.selectIndex();
    this.selectRecomendProfile(this.index + 1);
  }

  /**
   * Not Interested function to not intertest the profile
   */
  notIntersted() {
    alert('Profile Not Intersted');
    this.selectIndex();
    this.selectRecomendProfile(this.index+1);
  }

  /** 
   * Select Index Postion
  */
  selectIndex() {
    this.index = ((this.image.length - 1) > this.index) ? this.index : -1;
  }

  shortList() {
    alert('Profile Shortlisted');
    this.selectIndex();
    this.selectRecomendProfile(this.index+1);
  }

}
