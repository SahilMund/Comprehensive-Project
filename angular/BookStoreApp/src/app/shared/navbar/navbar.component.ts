import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginComponent } from 'src/app/core/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/core/user-register/user-register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
     
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width= "40%";
    // this.newMessage(emp);

    this.dialog.open(UserLoginComponent,dialogConfig);
  }

  onSignup(){
     
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width= "40%";
    // this.newMessage(emp);

    this.dialog.open(UserRegisterComponent,dialogConfig);
  }

  onLogOut(){
    localStorage.removeItem("jwt");
  }

  
  UpdatePassword(){
     
    this.router.navigate(["/forgot-password"]);
  }
}
