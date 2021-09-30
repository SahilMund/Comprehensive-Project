import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  AddCartData : any ={
    quantity:0,
    sumTotal:0,
    bookId:0,
    userId :0
 }
 
 constructor(private http:HttpClient) { }

 

 readonly APIurL = "https://localhost:44321";

  

 addCartData(cart:any){
   return this.http.post(this.APIurL+'/Cart',cart);
 }

 getCartList(userId:any) :Observable<any>{
   return this.http.get<any>(this.APIurL + '/Cart/'+userId);
 }

 addOrderData(ord:any){
  return this.http.post(this.APIurL+'/Order',ord);
 }

 
 deleteCart(cartid:number){
  return this.http.delete(this.APIurL+'/Cart/'+cartid);

}

}
