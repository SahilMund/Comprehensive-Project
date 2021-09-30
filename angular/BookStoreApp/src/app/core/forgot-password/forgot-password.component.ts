import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userauth/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public service:UserService,private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  
   
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.updatePassword = {
     email:'',
     password:'',
    }
  }

 
   onPasswordSubmit(form:NgForm){
   var bodyDataforPatch ={
      op:"replace",
      path:"Password",
      value:form.value.Password,
    }
    console.log(form.value);
    this.service.UpdateUserPassword(form.value.Email,bodyDataforPatch).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open("Password Updated Sucessfully",'Exit',{
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

  


  GoBack(){
    this.router.navigate(["home"]);
   }

  

}
