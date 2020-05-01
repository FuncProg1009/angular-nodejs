import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _AllProductURL = 'http://localhost:3000/api/allproduct';
  private _AdminProduct = 'http://localhost:3000/api/admin-product';
  private _AdminbyID = 'http://localhost:3000/api/user-productid';
  private _AdminInsert = 'http://localhost:3000/api/addproduct';
  private _AdminUpdate = 'http://localhost:3000/api/updateproduct';
  private _AdminDelete = 'http://localhost:3000/api/deleteproduct';
  private _SearchName = 'http://localhost:3000/api/search-name';
  private _SearchMEN = 'http://localhost:3000/api/search-men';
  private _SearchWOMEN = 'http://localhost:3000/api/search-women';
  constructor(private http: HttpClient) { }


  allproduct() {
    return this.http.get<any>(this._AllProductURL);
  }
  adminproducts(): Observable<any>{
    return this.http.get<any>(this._AdminProduct);
  }
  usergetbyID(idd){
    return this.http.post<any>(this._AdminbyID, { id: idd});
  }
  addproduct(product){
    return this.http.post<any>(this._AdminInsert, product);
  }
  updateproduct(product){
    return this.http.post<any>(this._AdminUpdate, product);
  }
  deleteproduct(idd): Observable<any>{

    return this.http.post<any>(this._AdminDelete, {id: idd}) ;
  }
  searchName(name) {
    return this.http.post<any>(this._SearchName, { name: name});
  }
  searchMEN(){
    return this.http.get<any>(this._SearchMEN);
  }
  searchWOMEN(){
    return this.http.get<any>(this._SearchWOMEN);
  }
}
