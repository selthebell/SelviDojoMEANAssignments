import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BicycleListComponent } from './bicycle/bicycleList/bicycleList.component';
import { BicycleFormComponent } from './bicycle/bicycleForm/bicycleForm.component';
import { BicycleDetailsComponent } from './bicycle/bicycleDetails/bicycleDetails.component';
import { SearchPipe } from './search.pipe';

import { AuthService } from './services/auth.service';
import { BicycleService } from './services/bicycle.service';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BicycleListComponent,
    BicycleFormComponent,
    BicycleDetailsComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
     AuthService,
     BicycleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
