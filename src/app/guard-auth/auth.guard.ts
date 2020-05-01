import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  // tslint:disable-next-line:variable-name
  constructor(private _Auth: AuthService, private _Router: Router) { }
  canActivate(): boolean {
    if (this._Auth.loggerIn()){
      return true;
    }else {
      this._Router.navigate(['/login']);
      return false;
    }
  }
}
