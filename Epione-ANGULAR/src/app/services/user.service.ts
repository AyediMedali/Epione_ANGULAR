import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:18080/Epione-web/rest/users/' ;


  LoginAdmin(email , password)
  {
    return this.http.post(this.url+"logInAdmin?email="+email+"&password="+password,null);
  }
  
  LoginPatient(email , password)
  {
    return this.http.post(this.url+"logInPatient?email="+email+"&password="+password,null);
  }
  
  LoginDoctor(email , password)
  {
    return this.http.post(this.url+"logInDoctor?email="+email+"&password="+password,null);
  }

  getUsers()
  {
  }
}
