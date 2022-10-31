import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public length:number=0;
  public breadth:number=0;
  public height:number=0;
  public result:number=0;


  area(){
    this.result= (this.breadth*this.height)/2;

  }

  perimeter(){
    this.result=this.length+this.breadth+this.height;
  }

  

  

}
