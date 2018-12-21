import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  constructor(private fb:FormBuilder , private userService:UserService, private router : Router) { }

  ErrorMsg="" ;
  form = this.fb.group({
    email : [''] ,
    password: [''] 
  })
  user : Object ;
  ngOnInit() {
    
  }

  OnSubmit()
  {
    let email =  this.form.get('email').value ;
    let password = this.form.get('password').value;
    this.userService.LoginDoctor(email,password).subscribe( 
      (Data) => {
        if(Data && Data['id']>0)
        this.router.navigate(['home']) ;
        else { 
          this.ErrorMsg="A problem occured , check your informations" ;
        }
        console.log(Data);
      }
    )
   
  }

}
