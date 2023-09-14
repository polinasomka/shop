import { Component } from '@angular/core';
import { AddOrderService } from '../add-order.service';
import { AddToCartService } from '../add-to-cart.service';
AddToCartService

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  cart: any[] = []

  customer: any = {
    name: '',
    surname: '',
    email: ''
    
  };

  constructor(
    private orderService: AddOrderService,
    private addToCartService: AddToCartService
  ) {}

  placeOrder(): void {
    const products = this.addToCartService.getCartItems();
    this.orderService.addToOrders(this.customer, products);
    
  }

  resetCart(): void {
    this.addToCartService.clearCart();
    this.orderService.resetOrder(this.customer)
    this.cart = []; 
  }

}
