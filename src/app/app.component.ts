import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngApp';
  // tslint:disable-next-line:variable-name
  constructor(public _authService: AuthService) {

  }
}
