import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customercompound',
  templateUrl: './customercompound.component.html',
  styleUrls: ['./customercompound.component.css']
})
export class CustomercompoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public firstname:string="";
  public lastname:string="";
  public address:string="";
  public city:string="";
  public state:string="";
  public ordertotal:number=0;

  public customers:any=[
    {firstname:"michelle",lastname:"avery",address:"1-202, asdf, 500094",city:"dallas",state:"texas",orderTotal:1699.89},
    {firstname:"michelle",lastname:"avery",address:"1-202, asdf, 500094",city:"dallas",state:"texas",orderTotal:1699.89}
    
  ]
  addnewCustomer(){
    let customer = {
      firstname:this.firstname,
      lastname:this.lastname,
      address:this.address,
      city:this.city,
      state:this.state,
      ordertotal:this.ordertotal

    }

    if(this.firstname!="" && this.lastname!="" && this.address !="" && this.city!=""&& this.state!="" &&this.ordertotal > 0)
    this.customers.push(customer);

    this.firstname="",
    this.lastname="",
    this.address="",
    this.city="",
    this.state="",
    this.ordertotal=0

    alert("added new customer successfully!!!")

  }

  delete(i:number){
    this.customers.splice(i,1)
  }


}
