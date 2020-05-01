import { Component, OnInit } from '@angular/core';
import {ItemService} from '../service/item.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  constructor(private _ItemService: ItemService, private _router: Router) { }
    products: any;
  ngOnInit(): void {
    this._ItemService.adminproducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }

      }
    );
  }

}
