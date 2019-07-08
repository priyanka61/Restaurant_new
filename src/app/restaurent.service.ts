import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  restaurantDetails=[
    {
      restaurantName:'Sri Krishna',
      city:'Bangalore',
      state:'Karnataka',
      zip:'560076'
    }
  ]
  addRestaurant(restaurant){
    this.restaurantDetails.push(restaurant);
    localStorage.setItem('restaurants',JSON.stringify(this.restaurantDetails));
  }
 
  constructor() { }
}
