import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/userauth/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<UserRegisterComponent>,
    public service:UserService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onClose(){
    this.dialogbox.close();
    // this.service.filter('Resgister click');
   }

   
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.UserFormData = {
      userName:'',
      firstName:'',
      lastName : '',
     email:'',
     password:'',
    }
  }
   onSubmitUser(form:NgForm){
    
    console.log(form.value);
    this.service.addUserData(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open("Registered Sucessfully",'Exit',{
        duration:5000,
        verticalPosition:'top'
      });
      
      
    });
  }
}
