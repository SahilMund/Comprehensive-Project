import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { AddBookComponent } from './feature/books/add-book/add-book.component';
import { GetAllBookComponent } from './feature/books/get-all-book/get-all-book.component';
import { GetBookCategoryComponent } from './feature/books/get-book-category/get-book-category.component';
import { GetSingleBookComponent } from './feature/books/get-single-book/get-single-book.component';
import { CartDetailsComponent } from './feature/cart-details/cart-details.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'add-book',component:AddBookComponent, canActivate:[AuthGuard]},
  {path:'home',component:GetAllBookComponent,canActivate:[AuthGuard]},
  {path:'get-category-book',component:GetBookCategoryComponent,canActivate:[AuthGuard]},
  {path:'getbook/:id',component:GetSingleBookComponent,canActivate:[AuthGuard]},
  {path:'get-cart-details',component:CartDetailsComponent,canActivate:[AuthGuard]},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
