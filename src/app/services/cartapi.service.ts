import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) {}

  //Obtener datos del producto
  getProductData(){
      return this.productList.asObservable();
    }
    //Determinar los datos del producto
    setProduct(product:any){
      this.cartDataList.push(...product);
      this.productList.next(product);
    }

    // Añadir al carrito los productos
    addToCart(product:any){
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.getTotalAmount();
      console.log(this.cartDataList);
    }

    //Para obtener la cuantía total
    getTotalAmount(){
      let grandTotal =0;
      this.cartDataList.map((a:any)=>{
        grandTotal += a.total;
      })
    }

    //Elimina los datos del carrito uno a uno
    removeCartData(product:any){
      this.cartDataList.map((a:any, index:any)=>{
        if (product.id === a.id){
          this.cartDataList.splice(index,1);
        }
      })
    }

    //Quitar todos los productos del carrito
    removeAllCart(){
      this.cartDataList =[];
      this.productList.next(this.cartDataList);
    }
  }

