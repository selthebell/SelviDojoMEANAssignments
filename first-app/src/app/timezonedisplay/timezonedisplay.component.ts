import { Component } from '@angular/core';

@Component({
    selector:'app-timezonedisplay',
    templateUrl: './timezonedisplay.component.html'
})

export class TimeZoneDisplay{
    dt = new Date();
    selectedZone=null;
    getTimeZone(tZone:string){
        this.dt= new Date();
        if(tZone==='PST')
        {
           this.dt.setHours(this.dt.getHours() - 3);
        }
        else if(tZone==='MST')
        {
              this.dt.setHours(this.dt.getHours() - 2);
        } else if(tZone==='CST'){
            this.dt.setHours(this.dt.getHours() - 1);
        } else if(tZone==='CLEAR'){
            this.dt=null;
        }
        this.selectedZone=tZone;
    }
}