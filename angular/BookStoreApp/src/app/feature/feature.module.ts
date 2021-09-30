import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { GetAllBookComponent } from './books/get-all-book/get-all-book.component';
import { GetSingleBookComponent } from './books/get-single-book/get-single-book.component';
import {MatCardModule} from '@angular/material/card';
import { GetBookCategoryComponent } from './books/get-book-category/get-book-category.component';
import { RouterModule } from '@angular/router';

import { CartDetailsComponent } from './cart-details/cart-details.component';
import { BookService } from '../services/bookdata/book.service';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    GetAllBookComponent,
    GetSingleBookComponent,
    GetBookCategoryComponent,
    CartDetailsComponent
  ],exports:[BooksComponent,
    AddBookComponent,GetSingleBookComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule
  
  ],
  providers:[BookService]
})
export class FeatureModule { }
