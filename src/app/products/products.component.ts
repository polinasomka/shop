import { Component, Input } from '@angular/core';
import { ShopDataService } from '../shop-data.service';
import { AddToCartService } from '../add-to-cart.service';
AddToCartService


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products: any;
 originalProducts: any
  constructor(public data: ShopDataService,
    private addToCartService: AddToCartService){
    
  }
  
  ngOnInit(){
    this.data.getProducts().subscribe(res => {console.log(res); 
    this.products = res
    this.originalProducts = res;
    this.updateCategoriesNoRepeat()
  })

  }
  

  sortList: any = [
    {
      title: "price low to high",
      sortBy: false
    }, 
    {
      title: "price high to low",
      sortBy: false
    }
  ]

choosen: number = -1
sortedProducts: any = []
product: any
category: any
item: any

byField(field: any) {
  return (a: any, b: any) => {
    if (a[field] > b[field]) {
      return 1;
    } else if (a[field] < b[field]) {
      return -1;
    } else {
      return 0;
    }
  };
}
field: any

sort1 = true
sort2 = false
sort3 = false
categories: any = []
categoriesNoRepeat: any = []
sortBy(index: number) {
  this.sort1 = !this.sort1

if(index == 0){
    this.sort2 = true
    this.sort1 = false
    this.sort3 = false
  } else if(index == 1) {
    this.sort2 = false
    this.sort1 = false
    this.sort3 = true
  }

  this.choosen = index;
  this.sortedProducts = this.products.slice().sort(this.byField("price"));
}

updateCategoriesNoRepeat(){
  for(this.product of this.products){
    this.categories.push(this.product.category) 

  }

  this.categoriesNoRepeat = Array.from(new Set(this.categories));
  this.categoriesNoRepeat = this.categoriesNoRepeat.filter((item: string) => item !== null && item.trim() !== '');

  console.log(this.categories)
  console.log(this.categoriesNoRepeat)

  console.log(this.sortedProducts);
}

selectedCategory: any

sortByCategory(category: string) {
  this.selectedCategory = category;
  if (!category) {
    this.products = this.originalProducts.slice();
  } else {
    this.products = this.originalProducts.filter((product: any) => product.category === category);
  }
  
}

i: number = 0
selectedDiv: number | null = null
ishidden = true

showMoreDetails(index:number){
  this.selectedDiv = index
  this.ishidden = !this.ishidden
  console.log(this.selectedDiv)
}

categoryMenu = false
showCategoryMenu(){
  this.categoryMenu = !this.categoryMenu
}


addToCart(product: any): void {
  this.addToCartService.addToCart(product);
  this.addToCartService.getCartItems()
}

}
