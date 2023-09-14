import { Component } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart: any[] = [];

  constructor(private addToCart: AddToCartService,
    private removeCartItem: AddToCartService,
    private substractItem: AddToCartService,
    private addItem: AddToCartService,
    private countSum: AddToCartService){ }


  ngOnInit(): void{
    this.cart = this.addToCart.getCartItems()
    
  }

  // product: any

  substract(product: any): any{
    this.substractItem.substractItemQuantity(product)
  }

  add(product: any): any{
    this.addItem.addItemQuantity(product)
  }

  removeItem(product:any): any{
    this.removeCartItem.removeCartItem(product)
  }

  getTotalPrice(){
    return this.countSum.countSum()
  }
}
