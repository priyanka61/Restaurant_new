import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../restaurent.service';
import { HomepageComponent} from '../homepage/homepage.component'

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})

export class AddrestaurantComponent implements OnInit {
  restaurant={
    restaurantName:'',
    city:'',
    state:'',
    zip:''
  }
  restaurantToBeAdded={
    restaurantName:'',
    city:'',
    state:'',
    zip:''
  }
  constructor(private resService:RestaurentService) {
  }
  ngOnInit() {    
  }
  submit(a){
    console.log(this.resService.restaurantDetails);
    this.restaurantToBeAdded={
      restaurantName:a.restaurantName,
      city:a.city,
      state:a.state,
      zip:a.zip
    }
    alert("list is added successfully")
    this.resService.addRestaurant(this.restaurantToBeAdded);
  }


}
