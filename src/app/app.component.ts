import { Component } from '@angular/core';
import { ShopDataService } from './shop-data.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  products: any
  constructor(private data: ShopDataService){
    
  }
  // ngOnInit(){
  //   this.data.getProducts().subscribe(res => {console.log(res), this.products = res})
  // }

  // getProducts(){
  //   return this.products
  // }
  
}
