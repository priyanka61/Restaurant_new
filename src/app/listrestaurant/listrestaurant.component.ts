import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../restaurent.service';
import { HomepageComponent} from '../homepage/homepage.component'

@Component({
  selector: 'app-listrestaurant',
  templateUrl: './listrestaurant.component.html',
  styleUrls: ['./listrestaurant.component.css']
})

export class ListrestaurantComponent implements OnInit {
  details;
  constructor(private listService:RestaurentService) { 
   this.details=this.listService.restaurantDetails;
  }

  ngOnInit() {

  }

}
