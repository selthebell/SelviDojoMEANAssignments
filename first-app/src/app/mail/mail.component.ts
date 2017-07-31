import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.css'],
})

export class MailComponent implements OnInit {
    ngOnInit(): void {
            for(let i=0;i<10;i++){
                const num=(Math.floor(Math.random() * 6) ) + 1;
                this.newColor.push(this.colorArr[num]);
            }
        }

    emails=[
        {email:'bill@gates.com',importance:true,subject:'New Windows',content:'New windows lauch'},
        {email:'ADA@LOVELACE.COM',importance:false,subject:'New Windows',content:'New windows lauch'},
        {email:'bill@gates.com',importance:true,subject:'New Windows',content:'New windows lauch'}

    ]
    newColor=[];
    colorArr ={1:'red',
                2:'green',3:'blue',4:'pink',5:'yellow',6:'black',7:'red'};
    
}