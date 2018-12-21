import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { user } from '../entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ErrorMsg=""; 
   

  constructor(private fb:FormBuilder , private userService:UserService , private router:Router) { }

  form = this.fb.group({
    email : ['']  ,
    firstName : [''] ,
    lastName : [''] ,
    password : [''] ,
    phoneNumber : [''],
    codePostal : [''] ,
    numAppart : [''],
    rue : [''] ,
    ville : [''] 
  })
  ngOnInit() {
  }

  OnSubmit()
  {
    let email =  this.form.get('email').value ;
    let firstName =  this.form.get('firstName').value ;
    let lastName =  this.form.get('lastName').value ;
    let password =  this.form.get('password').value ;
    let phoneNumber =  this.form.get('phoneNumber').value ;
    let codePostal =  this.form.get('codePostal').value ;
    let numAppart =  this.form.get('numAppart').value ;
    let rue =  this.form.get('rue').value ;
    let ville =  this.form.get('ville').value ;

    let user:any = {
      "email" : email , 
      "firstName" : firstName ,
      "lastName" : lastName , 
      "password" : password, 
      "phoneNumber" : phoneNumber ,
      "adresse" : {
        "codePostal" : codePostal , 
        "numAppart" : numAppart , 
        "rue" : rue , 
        "ville" : ville
      }
    };


    
    this.userService.SignDoctor(user).subscribe( 
      (Data) => {
        console.log(Data['id']);

        if(!Data['id'] || Data['id']==0)
        {
          this.ErrorMsg = "And error occured during sign in" ;
        }
        else {
          this.router.navigate(['home']) ;
        }
      }
    )
   
  }

}
