import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'products',
        component: ProductsPageComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'detail/:uuid',
        component: DetailPageComponent
      },
      {
        path: 'shopping',
        component: ShoppingCartPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
