import { Component, OnInit } from '@angular/core';
import { RestaurentService } from '../restaurent.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:RestaurentService) { }
  noOfRestaurants;
  ngOnInit() {
    this.noOfRestaurants=this.service.restaurantDetails.length;
  }
  

}
