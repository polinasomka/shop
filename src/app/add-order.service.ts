import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  constructor() { }

  orders: any[] = []
  

  addToOrders(customer: any, products: any[]){
    const order = {
      customer: { ...customer },
      products: [...products]
    };
    this.orders.push(order);

    console.log(this.orders)
  }

  getOrders(): any{
    return this.orders
  }

  resetOrder(customer: any){
    customer.name = ""
    customer.surname = ""
    customer.email = ""
  }
}
 