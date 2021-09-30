import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookdata/book.service';

@Component({
  selector: 'app-get-book-category',
  templateUrl: './get-book-category.component.html',
  styleUrls: ['./get-book-category.component.css']
})
export class GetBookCategoryComponent implements OnInit {

  bookCatList:any;
  constructor(public bookservice:BookService) { }

  getBookCategoryData(){
    this.bookservice.getBookByCategory().subscribe(data=>{
      
      this.bookCatList=data;
      console.log(this.bookCatList);

      
    })
  }
  ngOnInit(): void {
    this.getBookCategoryData();
  }

}
