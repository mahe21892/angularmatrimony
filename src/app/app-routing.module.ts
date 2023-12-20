import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendedComponent } from './recomended/recomended.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'recomended', component: RecomendedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
