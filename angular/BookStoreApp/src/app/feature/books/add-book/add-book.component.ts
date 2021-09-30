import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/bookdata/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(
    public service:BookService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }


   
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.AddBookData = {
      bookImg:'',
      bookName:'',
      authortName:'',
      description :'' ,
      price :0,
      userId :0
    }
  }

  // onImagePicked(event:any){
  //   console.log(event);
  // }
   onAddBook(form:NgForm){
    
    console.log(form.value);
    var loggedInUserId = localStorage.getItem("loggedInUser");
    var loggedId = parseInt(loggedInUserId,10);
    form.value.userId = loggedId;
    console.log(form.value);
  
    this.service.addBookData(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open("Book Added Succesfully",'Exit',{
        duration:3000,
        verticalPosition:'top'
      });
      
      
    });
  }
}
