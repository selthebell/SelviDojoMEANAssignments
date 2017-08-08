import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';

import { CookieService } from 'ngx-cookie';

import { BicycleService } from '../../services/bicycle.service';
import { Bicycle } from '../../bicycle';

@Component({
  selector: 'app-bicycleDetails',
  templateUrl: './bicycleDetails.component.html'
})

export class BicycleDetailsComponent implements OnInit{

  bicycle:Bicycle;
  subscription: Subscription;

  constructor(private router: Router,private route: ActivatedRoute,private bicycleServ:BicycleService){

  }

  ngOnInit() {
    console.log('on init')
    this.subscription = this.route.paramMap
      .switchMap(param =>
        this.bicycleServ.getListings(param.get('_id'))
      )
      .subscribe(bicycle => this.bicycle = bicycle);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onUpdate(bicycle: Bicycle){

    console.log('onsubmit of new cycle',bicycle);
    this.bicycleServ.editListings(bicycle)
      .then(() => this.router.navigate(['dashboard']))
      .catch(error => console.log('catching errors', error) );
  }
}
