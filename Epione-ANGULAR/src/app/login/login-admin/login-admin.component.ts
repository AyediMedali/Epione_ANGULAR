import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private fb:FormBuilder , private userService:UserService, private router : Router) { }

  form = this.fb.group({
    email : ['' ] ,
    password: [''] 
  })
  user : Object ;


  OnSubmit()
  {
    let email =  this.form.get('email').value ;
    let password = this.form.get('password').value;
    this.userService.LoginAdmin(email,password).subscribe( 
      (Data) => {
        this.router.navigate(['home']) ;
        console.log(Data);
      }
    )
   
  }

  ngOnInit() {
  }

}
