import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/bookdata/book.service';
import { CartService } from 'src/app/services/cartdata/cart.service';

@Component({
  selector: 'app-get-single-book',
  templateUrl: './get-single-book.component.html',
  styleUrls: ['./get-single-book.component.css']
})
export class GetSingleBookComponent implements OnInit,OnDestroy {

  constructor(public service:BookService,public cartService:CartService,private snackBar:MatSnackBar,private router:Router) { }

  dataSourceFromSibling:any;
  subscription: Subscription;
  
 

  ngOnInit(): void {
    this.subscription = this.service.
    currmsg.subscribe(message => this.dataSourceFromSibling = message);
    console.log(this.dataSourceFromSibling);
    this.dataSourceFromSibling = Array(this.dataSourceFromSibling);
    this.cartService.AddCartData.quantity='';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  AddToCart(item:any){
    // console.log(item);
    var loggedInUserId = localStorage.getItem("loggedInUser");
    var loggedId = parseInt(loggedInUserId,10);
    this.cartService.AddCartData.userId = loggedId;
    this.cartService.AddCartData.bookId = item.bookId;
    this.cartService.AddCartData.sumTotal = item.price *  this.cartService.AddCartData.quantity;

    console.log( this.cartService.AddCartData);

    this.cartService.addCartData(this.cartService.AddCartData).subscribe(res=>{
     
      this.snackBar.open("Book Added to Cart Succesfully",'Exit',{
        duration:3000,
        verticalPosition:'top'
      });
      
      
    });

  
  }

  plus(){
    this.cartService.AddCartData.quantity ++;
  }
 
  minus(){
    this.cartService.AddCartData.quantity --;
  }

  BuyNow(item){
    console.log(item);
    
    
    var orderData ={
      bookId:item.bookId,
      userId:item.userId

    }
    
    this.cartService.addOrderData(orderData).subscribe(res=>{
       
        this.snackBar.open("Order Added Succesfully",'Exit',{
          duration:1000,
          verticalPosition:'top'
        });
        
        
      },err=>{
        this.snackBar.open("Some Error Occured",'Exit',{
          duration:1000,
          verticalPosition:'top'
        });
      });
    
  }

  onReview(bookId:number){

    console.log(this.service.review);
    var bodyDataforPatch ={
       op:"replace",
       path:"Review",
       value:this.service.review
     }

     this.service.UpdateReview(bookId,bodyDataforPatch).subscribe(res=>{
   
       this.snackBar.open("Review Added Sucessfully",'Exit',{
         duration:2000,
         verticalPosition:'top'
       });
       
       console.log(res);
     }, err=>{
       this.snackBar.open(err.Message|| "Some Error Occur !!",'Exit',{
         duration:2000,
         verticalPosition:'top'
       });
     });
   }
 

   goBack(){
    this.router.navigate(["home"]);
   }
}
