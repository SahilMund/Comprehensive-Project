import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from 'src/app/models/Book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 

  AddBookData : Book ={
    bookImg:'',
     bookName:'',
     authortName:'',
     description :'' ,
     price :0,
     userId :0
  }
  
  constructor(private http:HttpClient) { }

  // This below code is help to pass data between different different components
  private dataSource = new BehaviorSubject({});
  currmsg = this.dataSource.asObservable();

  dataChange(bookbyIdData:any){
    this.dataSource.next(bookbyIdData);
  }
  // --------------upto this-----

  readonly APIurL = "https://localhost:44321";

review :any =0;
 

  addBookData(book:Book){
    return this.http.post(this.APIurL+'/Book',book);
  }

  getBookList() :Observable<any>{
    return this.http.get<any>(this.APIurL + '/Book');
  }

  getBookById(id:any) :Observable<any>{
    return this.http.get<any>(this.APIurL + '/Book/'+id);
  }
  getBookByCategory() :Observable<any>{
    return this.http.get<any>(this.APIurL + '/Book/bookCategories');
  }

  UpdateReview(bookid :any,bodyData:any){
    return this.http.patch(this.APIurL+"/Book/"+bookid,Array(bodyData));

  }
}

