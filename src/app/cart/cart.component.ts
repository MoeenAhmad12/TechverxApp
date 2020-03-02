import { Component, OnInit } from '@angular/core';
import { DialogResult } from '../dialogResult';
import { HeaderServiceService } from '../header-service.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:DialogResult[];
  cart:Cart[]=[];
  item:Cart;
  count:any;
  constructor(private headerService:HeaderServiceService) { 
    
  }

  ngOnInit(): void {
    this.cartItems=this.headerService.getCartItem();
    this.setCart();
  }
  setCart(){
    
    for(var i=0;i<this.cartItems.length;i++)
    {
      this.count=this.cartItems[i].totalPrice;
    }
  }
}
