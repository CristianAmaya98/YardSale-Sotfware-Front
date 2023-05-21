import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';



@NgModule({
  declarations: [
    ProductosComponent,
    HomePageComponent,
    ProductComponent,
    DetailPageComponent,
    ShoppingCartPageComponent,
    ProductsPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
