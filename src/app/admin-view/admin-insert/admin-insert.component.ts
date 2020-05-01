import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-admin-insert',
  templateUrl: './admin-insert.component.html',
  styleUrls: ['./admin-insert.component.scss']
})
export class AdminInsertComponent implements OnInit {
  productData: any ={} ;
  constructor(private _ItemService: ItemService,private _Router: Router) { }

  ngOnInit(): void {
  }
  Insert(){
    this._ItemService.addproduct(this.productData).subscribe(
      res => {

      },
      error => {
        console.log(error);
      }
    );
    this._Router.navigate(['/manager']);
  }
}
