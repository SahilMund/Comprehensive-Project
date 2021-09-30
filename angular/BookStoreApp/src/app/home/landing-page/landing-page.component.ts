import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  
  ngOnInit(): void {
this.refreshLogin();

  }

  refreshLogin(){
    
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      this.router.navigate(["home"]);
    }
    this.router.navigate(["/"]);
   
  }
}
