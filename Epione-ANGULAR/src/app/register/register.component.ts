import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { user } from '../entities/user';
import { Router } from '@angular/router';
import { PasswordValidation } from './MatchPassword';
//import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ErrorMsg=""; 
 var : boolean = false ; 
   

  constructor(private fb:FormBuilder , private userService:UserService , private router:Router) { }

  passwordType : string = 'password' ; 
  passwordSeen : boolean = false ; 
  confirmType : string = 'password' ; 
  confirmSeen : boolean = false ; 
  icone : string = 'icon-eye' ; 
  iconeC : string = 'icon-eye' ; 

  form = this.fb.group({
    email : ['', Validators.required]  ,
    firstName : ['',Validators.required] ,
    lastName : ['',Validators.required] ,
    password : ['',Validators.required] ,
    confirmPassword : ['',Validators.required],
    phoneNumber : ['',Validators.required],
    codePostal : [''] ,
    numAppart : [''],
    rue : [''] ,
    ville : [''] 
  },{validator: PasswordValidation.MatchPassword })


  
  togglePassword(){
    if(this.passwordSeen){
      this.passwordSeen = false ; 
    this.passwordType = 'password' ;
    this.icone = 'icon-eye' ;  
  } else {
    this.passwordSeen = true ; 
    this.passwordType = 'text' ; 
    this.icone = 'icon-eye-off' ; 
  }
  }

  toggleConfirmPassword(){
    if(this.confirmSeen){
      this.confirmSeen = false ; 
    this.confirmType = 'password' ;
    this.iconeC = 'icon-eye' ;  
  } else {
    this.confirmSeen = true ; 
    this.confirmType = 'text' ; 
    this.iconeC = 'icon-eye-off' ; 
  }
  }


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


    this.userService.SignPatient(user).subscribe( 
      (Data) => {
        console.log(Data['id']+Data['error']);
        if(!Data['id'] || Data['id']==0 || Data['error']){
          if(Data['error']=="Le mot de passe doit contenir au moins un caractere numerique")
            this.ErrorMsg ="Your password should contain at least a number" ; 
           else  if(Data['error']=="Email existe deja !")
            this.ErrorMsg ="Email already exists" ; 
           else  if(Data['error']=="Le mot de passe doit etre superieur ou egale a 8 caracteres")
            this.ErrorMsg ="Your password should contain at least 8 characters" ; 
           else  if(Data['error']=="champs manquants!")
            this.ErrorMsg ="Please enter your informations, some fields are required!" ; 
            else if(Data['error']=="Le mot de passe doit contenir au moins un caractere en majuscule")
            this.ErrorMsg = "Your password should contain at least an upper case" ; 
  } else if(Data['id']>0) {
     // this.router.navigate(['home']) ;
    
  }

})


  }
}


