import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/ProductResponse';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  @Input() products: Product[] = [];
  @Input() title: string = ''
}
