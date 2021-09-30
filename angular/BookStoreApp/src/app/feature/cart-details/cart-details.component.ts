import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cartdata/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cartService:CartService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getCartData();
  }

  searchText:any;
  loggedInUserId = localStorage.getItem("loggedInUser");
  loggedId = parseInt(this.loggedInUserId,10);

  cartList:any;

  getCartData(){
    this.cartService.getCartList(this.loggedId).subscribe(data=>{
      
      this.cartList=data;
      console.log(this.cartList);
    })
  }

  onDeleteCart(item:any){
    console.log(item);
    
  
    this.cartService.deleteCart(item.cartId).subscribe(data=>{
      
      this.snackBar.open("One Item Deleted From Cart",'Exit',{
        duration:1000,
        verticalPosition:'top'
      });

      this.getCartData();

    },err=>{
      this.snackBar.open("Error Occur during cart deletion",'Exit',{
        duration:1000,
        verticalPosition:'top'
      });
    })
  }

}
