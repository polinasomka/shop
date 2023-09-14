import { NgModule } from '@angular/core';
import { ProductMoreDetailsComponent } from './product-more-details/product-more-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProductMoreDetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class ProductsModule { }
