import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // đường dẫn local chưa deploy
  private _registerURL = "http://localhost:3000/api/adduser";
  private _loginURL = "http://localhost:3000/api/login";
  constructor(private http: HttpClient,private _router: Router) { }

  register(user) {
    return this.http.post<any>(this._registerURL,user);
  }
  login(user) {
    return this.http.post<any>(this._loginURL,user);
  }
  loggerIn(){
    // nếu có token trả về true ,ko trả về false
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
     localStorage.removeItem('token');
     this._router.navigate(['/events'])
  }
}
