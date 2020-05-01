import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  products: any = [];

  constructor(private _ItemService: ItemService, private _router: Router) {
  }

  ngOnInit(): void {
    this._ItemService.adminproducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login'])
          }
        }

      }
    );
  }

}
