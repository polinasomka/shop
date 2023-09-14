import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductMoreDetailsComponent } from './products/product-more-details/product-more-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductMoreDetailsComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
