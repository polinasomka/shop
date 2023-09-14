import { Component } from '@angular/core';
import { AddOrderService } from '../add-order.service';
import { ShopDataService } from '../shop-data.service';
ShopDataService

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  orders: any[] = [];
  constructor(
    private addOrder: AddOrderService,
    private shopData: ShopDataService
  ) {}

  ngOnInit(): void{
    this.orders = this.addOrder.getOrders()
  }

  
}
