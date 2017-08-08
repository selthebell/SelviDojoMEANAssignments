import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class AuthService{
  constructor(private cookieService: CookieService,private _http: Http){}

  login(user: User): Promise<User>{
    return this._http.post('/api/auth/login',user)
      .map(response => response.json())
      .toPromise();
  }
  register(user:User): Promise<User>{
    console.log('in auth reg');
    return this._http.post('/api/auth/register',user)
      .map(data => data.json())
      .toPromise();
  }
 logout():Promise<User>{
   return this._http.delete('/api/auth/logout')
    .map(data => data.json())
    .toPromise();
 }
  getUser():Promise<User>{
    return this._http.get('/api/auth/index')
      .map(response => response.json())
      .toPromise();
  }
 isAuthed(): boolean{
   const expired = parseInt(this.cookieService.get('expiration'),10);
   const userID = this.cookieService.get('userID');
   const session = this.cookieService.get('session');

   return Boolean(session && expired && userID && expired > Date.now());
 }
}
