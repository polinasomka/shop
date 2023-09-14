import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/add-to-cart.service';
import { ShopDataService } from 'src/app/shop-data.service';

CommonModule


@Component({
  selector: 'app-product-more-details',
  templateUrl: './product-more-details.component.html',
  styleUrls: ['./product-more-details.component.css']
})
export class ProductMoreDetailsComponent{

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private ShopDataService: ShopDataService,
    private addToCartService: AddToCartService
  ) {}

  products: any = []
  product: any = {}
  i: number = 0
  foundProducts: any
  name: any

  

  ngOnInit(): void {
    let id: number 

    this.activatedRoute.params.subscribe(param => id = param['id'])
    this.products = this.ShopDataService.getProducts().subscribe((res: any) => {this.products = res;
      console.log(id)
    this.i = this.products.findIndex((product: any = {}) => product.id == id);
    console.log(this.i)}
    )
    
  }

  addToCart(product: any): void {
    this.addToCartService.addToCart(product);
    this.addToCartService.getCartItems()
  }

}
