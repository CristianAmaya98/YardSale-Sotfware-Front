import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../interface/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/user'
  private user !: UserResponse;

  constructor(private http: HttpClient) {
    this.findUser();
  }


  findUser() {
    this.http.get<UserResponse>(this.url).subscribe(userData => {
      this.user = userData;
    })
  }

  get imagenUser() {
    return this.user?.image || ''
  }

  get emailUser() {
    return this.user?.email || 'user@example.com'
  }

  verificarAuth() {
    return false;
  }
}
