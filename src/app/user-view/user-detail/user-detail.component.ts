import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../service/item.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    product: any = {};
  constructor( private activatedRoute: ActivatedRoute, private router: Router,private _itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      console.log(id)
      this._itemService.usergetbyID(id).subscribe(data => {
        this.product = data;
      },error => {console.log(error)});
    });
  }

}
