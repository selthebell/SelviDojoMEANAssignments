import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { BicycleService } from '../../services/bicycle.service';
import { Bicycle } from '../../bicycle';

@Component({
  selector: 'app-bicycleList',
  templateUrl: './bicycleList.component.html'
})

export class BicycleListComponent implements OnInit{

  bicycleList: Array<Bicycle>=[];
  userid;

  filter: Bicycle = new Bicycle();

  constructor(private cookieService: CookieService,private bicycleServ:BicycleService){
     this.userid=cookieService.get('userID');
  }

  ngOnInit(){
    this.getbicycleList();
  }
  getbicycleList() {
    this.bicycleServ.getListing()
      .then(bicycles => {
        console.log('getting books from server');
        this.bicycleList = bicycles;
      })
      .catch(console.log);
  }
  removeBicycle(bicycle: Bicycle) {

    this.bicycleServ.removeListings(bicycle._id)
      .then(() => this.bicycleList.splice(this.bicycleList.indexOf(bicycle)))
      .catch(console.log);

}
}
