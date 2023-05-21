import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {


  get products() {
    return this.productsService.findProducts;
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.findAllProduct()
  }
}
