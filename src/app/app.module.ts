import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ListrestaurantComponent } from './listrestaurant/listrestaurant.component';
import { RestaurentService } from './restaurent.service';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrestaurantComponent,
    ListrestaurantComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RestaurentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
