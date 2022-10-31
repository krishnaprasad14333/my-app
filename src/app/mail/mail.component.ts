import { Component, OnInit } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mails:any=[];

  constructor(private _mailService:MailsService) { 
    this._mailService.getmail().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (Error:any)=>{
      alert("GONE WRONG...!!!");
      }
    )
   }


  ngOnInit(): void {
  }

}
