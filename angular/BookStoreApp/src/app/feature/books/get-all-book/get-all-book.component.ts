import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/bookdata/book.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.css']
})
export class GetAllBookComponent implements OnInit,OnDestroy {

  
  constructor(private jwtHelper: JwtHelperService, private router: Router,
    private service:BookService) {}
  
    searchText:any;
 
  isUserAuthenticated() {

    const token: any = localStorage.getItem("jwt") ;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
 
 
  dataToTrasnfer:any;
  subscription: Subscription;
  bookList:any;

  getBookData(){
    this.service.getBookList().subscribe(data=>{
      
      this.bookList=data;
      console.log(this.bookList);
    })
  }


  ngOnInit(): void {
    this.getBookData();
  this.subscription = this.service.
  currmsg.subscribe(message => this.dataToTrasnfer = message);
  }


  newMessage(datatoSend:any) {
    this.service.dataChange(datatoSend);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  GetBookById(id:any){
    console.log(id);
    this.service.getBookById(id).subscribe(res =>{
        // console.log("this is form sender",res);
        //sending data from get-all-book component to get-single-book component
        this.newMessage(res);

        this.router.navigate(["/getbook/"+id]);
    });

    
  }


 

}
