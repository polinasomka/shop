import { Component, Input } from '@angular/core';
import { ShopDataService } from '../shop-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() product: any;
  @Input() products: any;
  
  

  questions = [
    {
      title: 'How long until we deliver your product',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor sint voluptate necessitatibus praesentium unde vero ipsam non sapiente? Ut aliquam quibusdam praesentium asperiores molestias, amet modi vero quisquam aperiam?',
      showAnswer: false
    },

    {
      title: 'How long until we deliver your product',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor sint voluptate necessitatibus praesentium unde vero ipsam non sapiente? Ut aliquam quibusdam praesentium asperiores molestias, amet modi vero quisquam aperiam?',
      showAnswer: false
    },

    {
      title: 'How long until we deliver your product',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor sint voluptate necessitatibus praesentium unde vero ipsam non sapiente? Ut aliquam quibusdam praesentium asperiores molestias, amet modi vero quisquam aperiam?',
      showAnswer: false
    },

    {
      title: 'How long until we deliver your product',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor sint voluptate necessitatibus praesentium unde vero ipsam non sapiente? Ut aliquam quibusdam praesentium asperiores molestias, amet modi vero quisquam aperiam?',
      showAnswer: false
    }
    
  ];

  toggleAnswer(index: number) {
    this.questions[index].showAnswer = !this.questions[index].showAnswer;
  }
  constructor(private data: ShopDataService){
    
  }
  i: number = 0
  // product: any | undefined
  ngOnInit(){
    this.data.getProducts().subscribe(res => {console.log(res); 
    this.products = res;
    this.products[this.i] = this.product})
  }

  getProducts(){
    return this.products
  }

}
