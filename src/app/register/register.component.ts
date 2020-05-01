import { Component, OnInit } from '@angular/core';
import { AuthService} from "../service/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  UserData:any = {};



  constructor(private _Auth: AuthService,private _Router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this._Auth.register(this.UserData).subscribe(
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
