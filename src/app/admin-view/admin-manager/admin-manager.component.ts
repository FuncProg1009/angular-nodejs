import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ItemService} from '../../service/item.service';
import { Observable } from 'rxjs';
import {async} from "rxjs/internal/scheduler/async";
@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss']
})
export class AdminManagerComponent implements OnInit {
  products: any = [];
  page = 1;
  pageSize = 3 ;
  constructor(private _itemService: ItemService, private _router: Router) { }

  ngOnInit(): void {
    this._itemService.adminproducts().subscribe(
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
 deleteproduct(id)  {
    // tslint:disable-next-line:max-line-length
  this._itemService.deleteproduct(id).subscribe(  value => { this.getAll(); }, error => { console.log(error);  });
  }
  getid(id): void {
    this._router.navigate(['/manager/update', id]);
  }
  getAll(): void {
    this._itemService.adminproducts().subscribe(
      res => {
        this.products = res;
      }
    );
  }
}
