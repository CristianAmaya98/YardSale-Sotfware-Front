import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ShoppingCartService } from 'src/app/home/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get counterShopping() {
    return this.shoppingCartService.shoppingCount;
  }

  get email() {
    return this.authService.emailUser;
  }

  get image() {
    return this.authService.imagenUser
  }

  constructor(
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService
  ) { }
}
