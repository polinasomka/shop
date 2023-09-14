import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  constructor(public http: HttpClient) { }

  getProducts(){
    return this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json')
  }

  // getCategory(){
  //   return this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=powder')
  // }
}
