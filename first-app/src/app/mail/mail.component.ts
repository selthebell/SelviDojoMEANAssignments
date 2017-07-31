import { Component } from '@angular/core';

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
})

export class MailComponent{
    emails=[
        {email:'bill@gates.com',importance:true,subject:'New Windows',content:'New windows lauch'},
        {email:'ADA@LOVELACE.COM',importance:false,subject:'New Windows',content:'New windows lauch'},
        {email:'bill@gates.com',importance:true,subject:'New Windows',content:'New windows lauch'}

    ]
}