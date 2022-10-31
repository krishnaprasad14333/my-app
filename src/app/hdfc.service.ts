import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdfcService {

  constructor() { }
  public balance:number=0;

  deposit(amount:number){
    this.balance=this.balance+amount;

  }
  withdraw(amount:number){
    this.balance=this.balance-amount;

  }
  Balance(){
    return this.balance;
  }

}
