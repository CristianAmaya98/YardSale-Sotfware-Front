import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/ProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlEndpoint = 'http://localhost:3000/products';

  private products: Product[] = [];

  get findProducts() {
    return [...this.products];
  }

  constructor(private http: HttpClient) { }


  findAllProduct() {
    this.http.get<Product[]>(this.urlEndpoint).subscribe(data => {
      this.products = data;
    })
  }
}
