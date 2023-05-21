import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrerPageComponent } from './pages/registrer-page/registrer-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrerPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
