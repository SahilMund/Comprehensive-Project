import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserFormData: User={
  
   userName:'',
    firstName:'',
    lastName : '',
   email:'',
   password:'',

  };


  loginFormData: any={
    email:'',
    password:''
  }

  updatePassword :any={
   
   email:'',
   password:''
  }

  constructor(private http:HttpClient) { }

  readonly APIurL = "https://localhost:44321";



  addUserData(user:User){
    return this.http.post(this.APIurL+'/User',user);
  }

  LogIn(loginData :any){
    return this.http.post(this.APIurL+"/auth/login",loginData);

  }

  UpdateUserPassword(email :any,bodyData:any){
    return this.http.patch(this.APIurL+"/User/"+email,Array(bodyData));

  }
}
