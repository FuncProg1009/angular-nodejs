import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../service/item.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  products: any =[];
  constructor(private _ItemService: ItemService) { }

  ngOnInit(): void {
    this._ItemService.allproduct().subscribe(res => this.products = res.slice(1, 8),err =>console.log(err));
  }

}
