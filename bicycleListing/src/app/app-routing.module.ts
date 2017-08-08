import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BicycleListComponent } from './bicycle/bicycleList/bicycleList.component';
import { BicycleFormComponent } from './bicycle/bicycleForm/bicycleForm.component';
import { BicycleDetailsComponent } from './bicycle/bicycleDetails/bicycleDetails.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: BicycleListComponent,
     pathMatch: 'full'
  },
  {
    path: 'bicycles/:_id',
    component: BicycleDetailsComponent,
  },
  {
    path: 'newListing',
    component: BicycleFormComponent,
     pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

