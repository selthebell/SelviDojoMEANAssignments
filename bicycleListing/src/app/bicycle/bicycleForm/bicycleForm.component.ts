import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { AuthService } from '../../services/auth.service';
import { BicycleService } from '../../services/bicycle.service';
import { Bicycle } from '../../bicycle';
import { User } from '../../user';

@Component({
  selector: 'app-bicycleForm',
  templateUrl: './bicycleForm.component.html'
})

export class BicycleFormComponent implements OnInit{

  bicycle:Bicycle=new Bicycle();
  userid;
  constructor(private cookieService: CookieService,private bicycleServ:BicycleService){
    this.userid=cookieService.get('userID');
  }

  ngOnInit() {
  }
  onSubmit(newlist):void{
    console.log('onsubmit of new cycle',this.bicycle);
    this.bicycleServ.newListing(this.bicycle)
      .then(() => this.bicycle = new Bicycle())
      .then(() => newlist.reset())
      .catch(console.log);
  }
}
