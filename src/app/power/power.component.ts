import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public num:number=0;
  public result:number=0;

square(){
  this.result=this.num*this.num;
}
cube(){
  this.result=this.num*this.num*this.num;
}

}
