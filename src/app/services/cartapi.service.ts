import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import any = jasmine.any;


@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) {
    getProductData(){
      return this.productList.asObservable()
    }

    setProduct(product:any){
      this.cartDataList.push(...product);
    }
  }
}
