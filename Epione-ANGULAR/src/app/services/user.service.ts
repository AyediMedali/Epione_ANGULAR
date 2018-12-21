import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  url = 'http://localhost:18080/Epione-web/rest/users/' ;


  LoginUser(email , password)
  {
    return this.http.post(this.url+"logIn?email="+email+"&password="+password,null);

  }
  SignDoctor(user : any) 
  {
    console.log(user) ;
    return this.http.post(this.url+"signInPatient" , user) ;
  }
  getUsers()
  {
  }
}
