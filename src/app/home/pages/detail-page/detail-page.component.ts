import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Products from "../../../data/products.json";
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  products: any[] = JSON.parse(JSON.stringify(Products))?.default;
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const uuid: string = params['uuid'] || null;
      this.product = this.products.find(product => product?.uuid === Number(uuid))
    });
  }

  verificarAuth() {
    if (!this.authService.verificarAuth()) {
      this.router.navigateByUrl('/auth/login');
      return;
    }
  }

}
