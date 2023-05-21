import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingList: any[] = [];


  constructor() {
    this.shoppingList = JSON.parse(localStorage.getItem('shopping')!) || [];
  }

  get shoppingProducts() {
    return [...this.shoppingList]
  }

  get shoppingCount() {
    return this.shoppingList?.length || 0
  }

  addProductShoppingCart(product: any) {
    this.shoppingList = [product, ...this.shoppingList]
    localStorage.setItem('shopping', JSON.stringify(this.shoppingList));
  }
}
