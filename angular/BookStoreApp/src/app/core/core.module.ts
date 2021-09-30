import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../services/userauth/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    ForgotPasswordComponent
  ],
  exports:[ UserRegisterComponent,
    UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [UserService,{
    provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:false}
  }],
})
export class CoreModule { 

}
