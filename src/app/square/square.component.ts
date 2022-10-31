import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public height:number=0;
  public breadth:number=0;
  public result:number=0;

  area(){
    this.result=this.height*this.breadth;
 
  }
  perimeter(){
    this.result=this.height*this.height,this.breadth*this.breadth;
  }
  volume(){
    this.result=this.height*this.height*this.height;
  }
  radius(){
    this.result=this.height/2*1.414
  }

}
