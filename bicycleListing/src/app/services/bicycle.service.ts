import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';
import { Bicycle } from '../bicycle';


@Injectable()
export class BicycleService{
  constructor(private cookieService: CookieService,private _http: Http){}

  getListing(): Promise<Bicycle[]>{
    return this._http.get('/api/bicycle/index')
      .map(response => response.json())
      .toPromise();
  }
  getListings(id: string): Promise<Bicycle> {
    console.log('getting by id', id);
    return this._http.get(`/api/bicycle/${ id }`)
      .map(data => data.json())
      .toPromise();
  }
  newListing(bicycle: Bicycle): Promise<Bicycle>{
    return this._http.post('/api/bicycle/new',bicycle)
      .map(response => response.json())
      .toPromise();
  }
  editListings(bicycle: Bicycle): Promise<Bicycle>{
    return this._http.put(`/api/bicycle/edit/${ bicycle._id }`,bicycle)
      .map(response => response.json())
      .toPromise();
  }
  removeListings(id: string): Promise<Bicycle> {
    return this._http.delete(`/api/bicycle/delete/${ id }`)
      .map(data => data.json())
      .toPromise();
  }
  }
