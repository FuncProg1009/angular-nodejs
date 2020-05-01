import { Component, OnInit } from '@angular/core';
import { AuthService} from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserData:any = {};
  constructor(private _Auth: AuthService,private _Router: Router) { }

  ngOnInit(): void {
  }
  LoginUser(){
    this._Auth.login(this.UserData).subscribe(
      res =>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this._Router.navigate(['/manager']);
      },
      error =>{
        console.log(error)
      }
    )
  }
}
