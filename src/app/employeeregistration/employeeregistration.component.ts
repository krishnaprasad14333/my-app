import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string="";

  public age:number=0;

  public company:string="";

  public package:number=0;

  public employees:any=[
    {name:'krishna',age:32,company:'tcs',package:9.9},
    {name:'gireesh',age:18,company:'hcl',package:20},
    {name:'lokesh',age:17,company:'cabgemini',package:30}
  ]

  register(){
    let employee={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package,
    }

    if(this.name!="0" && this.age!=0 && this.company!="0" && this.package!=0)
    {
        this.employees.push(employee);
        this.name="",
        this.age =0,
        this.company="",
        this.package =0,
        alert("registed succesfully!!!");
    }
   
  }
  delete(i:number){
    this.employees.splice(i,1);
  }

}
