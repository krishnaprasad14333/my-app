import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name: string = "";
  public price: number = 0;
  public quantity: number = 0;

  public carts: any = [
    { name: "shirt", price: 500, quantity: 1 },
    { name: "pen", price: 10, quantity: 1 },
  

  ]

  addtocart() {
    let cart = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    }

    if (this.name != "" && this.price > 0 && this.quantity > 0) {
      this.carts.push(cart);
    

    this.name = "",
      this.price = 0,
      this.quantity = 0

    alert("added to cart successfully!!!")
    }

  }


  delete(f: number) {
    this.carts.splice(f, 1);
  }


}
