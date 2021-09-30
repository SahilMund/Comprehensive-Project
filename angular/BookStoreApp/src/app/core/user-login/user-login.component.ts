import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/userauth/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  inValidLogin:boolean | undefined;

  constructor(private router:Router, 
    public dialogbox : MatDialogRef<UserLoginComponent>, 
    public service:UserService,private snackBar:MatSnackBar,private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.loginFormData = {
      
     email:'',
     password:'',
    }
  }

  onClose(){
    this.dialogbox.close();
    // this.service.filter('Resgister click');
   }

   

   UpdatePassword(){
    //  this.resetForm();
     this.onClose();
    this.router.navigate(["forgot-password"]);
  }

  loginForm(form:NgForm){
    this.service.LogIn(form.value).subscribe(res=>{

      localStorage.clear();
      console.log(res);
      const token = (<any>res).token;
      this.onClose();
      console.log(token);
      console.log((<any>res).userData[0].userId);

      const userId = (<any>res).userData[0].userId;
      localStorage.setItem("jwt",token);
      localStorage.setItem("loggedInUser",userId);

      this.inValidLogin =false;
      this.snackBar.open("Successfully LoggedIn",'Exit',{
        duration:5000,
        verticalPosition:'top'
      });

  
      this.router.navigate(["home"]);
    },err=>{
      console.log(err);
      this.inValidLogin = true;
      this.snackBar.open("OOPSY !! Invalid Credentials",'Exit',{
        duration:5000,
        verticalPosition:'top'
      });
    })
  }
}
