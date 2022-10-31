import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name:string="";
  public names:string[]=['krishna','prasad'];

  register(){
   
     if(this.name !=""){
      this.names.push(this.name);
     }

    this.name="";
  }

    delete() {
      this.names.pop();
  }

}
