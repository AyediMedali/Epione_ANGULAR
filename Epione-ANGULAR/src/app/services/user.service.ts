import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../entities/user';
import { Observable } from 'rxjs';
import { doctor } from '../entities/doctor';
import { motif } from '../entities/motif';
import { commentaire } from '../entities/commentaire';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:18080/Epione-web/rest/users/' ;
  urlD = "http://localhost:18080/Epione-web/rest/doctors/" ;
  urlC = "http://localhost:18080/Epione-web/rest/commentaires/" ; 


  LoginAdmin(email , password)
  {
    localStorage.setItem('loggedIn','true') ;
    return this.http.post(this.url+"logInAdmin?email="+email+"&password="+password,null);
  }
  
  LoginPatient(email , password)
  {
    localStorage.setItem('loggedIn','true') ;
    return this.http.post(this.url+"logInPatient?email="+email+"&password="+password,null);
  }
  SignPatient(user : any) 
  {
    console.log(user) ;
    return this.http.post(this.url+"signInPatient" , user) ;
  }
  LoginDoctor(email , password)
  {
    localStorage.setItem('loggedIn','true') ;
    return this.http.post(this.url+"logInDoctor?email="+email+"&password="+password,null);
  }

  getDoctors() : Observable<doctor[]>{
   return this.http.get<doctor[]>(this.urlD) ;
  }

  getSingleDoctor(id : number) : Observable<doctor> {
    console.log(this.urlD+"details?id"+id); 
   return this.http.get<doctor>(this.urlD+"details?id="+id) ;
  }

  getCommentaireDoctor(id : number) : Observable<commentaire[]>{
    return this.http.get<commentaire[]>(this.urlC+"doctor?idD="+id) ; 
  }

  addComment(comment,idDoctor){
    return this.http.post(this.urlC+"?idP="+localStorage.getItem('userId')+"&idD="+idDoctor,comment) ;
  }

  deleteComment(idComment :number){
    return this.http.delete(this.urlC+"delete?idC="+idComment) ;
  }

  modifierComment(c:commentaire){
    return this.http.post(this.urlC+"modifier",c) ;
  }


}
