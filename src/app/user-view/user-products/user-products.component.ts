import { Component, OnInit } from '@angular/core';
import { ItemService} from "../../service/item.service";

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  products: any ;
  page = 1;
  pageSize = 3 ;
  // tslint:disable-next-line:ban-types
  sea: String = '' ;
  constructor(private _ItemService: ItemService) { }

  ngOnInit(): void {
    this._ItemService.allproduct().subscribe(res => this.products = res,err =>console.log(err));
  }
  searchName(name){
    this._ItemService.searchName(name).subscribe(res =>{
      if(res.length==0){
        alert('Not found')
      }else {
        this.products =res;
      }
        },err =>{console.log(err)});
  }
  getAll(){
    this._ItemService.allproduct().subscribe(res => this.products = res,err =>console.log(err));
  }
  searchmen(){
    this._ItemService.searchMEN().subscribe(res => this.products = res,err =>console.log(err));
  }
  searchwomen(){
    this._ItemService.searchWOMEN().subscribe(res => this.products = res,err =>console.log(err));
  }
}
