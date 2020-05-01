import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  productData: any = {} ;
  constructor( private activatedRoute: ActivatedRoute, private router: Router,private _itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      console.log(id)
      this._itemService.usergetbyID(id).subscribe(data => {
        this.productData = data;
      }, error => {console.log(error); } );
    });
  }
  Update(){
    this._itemService.updateproduct(this.productData).subscribe(
      res => {

      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/manager']);
  }
}
