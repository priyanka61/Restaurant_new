import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ListrestaurantComponent } from './listrestaurant/listrestaurant.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    pathMatch:'full'
  },
  {
    path:"addRestaurant",
    component:AddrestaurantComponent
  },
  {
    path:"listRestaurant",
    component:ListrestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
