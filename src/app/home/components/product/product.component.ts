import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductResponse } from '../../interfaces/ProductResponse';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: any;


  get productObj() {
    return this.product?.product;
  }

  constructor(private shoppingCartService: ShoppingCartService) { }

  addProduct(productReponse: ProductResponse) {
    const { uuid, product: { name, image, price } } = productReponse;
    const productShopping = {
      uuid,
      name,
      image,
      price
    }

    this.shoppingCartService.addProductShoppingCart(productShopping)
  }
}
