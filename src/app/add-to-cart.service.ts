import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  
  cart: any[] = []
  private readonly CART_KEY = 'cartItems';

  constructor() { 
    this.cart = JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
  }

  addToCart(product: any){
    this.cart.forEach(product => product.quantity = product.quantity++)
    console.log(product.quantity)
    
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }

    
    this.saveCartToLocalStorage()
  }
  

  addItemQuantity(product: any){
    product.quantity++
  }

  substractItemQuantity(product: any){
    if(product.quantity > 1){
      product.quantity--
    } else {
      this.removeCartItem(product)
    }
  }



  getCartItems(): any[] {
    console.log(this.cart)
    return this.cart
  }

  removeCartItem(product: any){
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart));
  }

  countSum(): number{
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }


  clearCart(): void {
    this.cart = [];
    this.saveCartToLocalStorage();
  }
}
