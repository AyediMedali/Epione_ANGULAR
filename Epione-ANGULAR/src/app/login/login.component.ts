import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

test ;
  constructor(private fb:FormBuilder , private userService:UserService) { }

  form = this.fb.group({
    email : ['' ] ,
    password: [''] 
  })
  user : Object ;
  ngOnInit() {
    
  }

  OnSubmit()
  {
    let email =  this.form.get('email').value ;
    let password = this.form.get('password').value;
    this.userService.LoginUser(email,password).subscribe( 
      (Data) => {
        console.log(Data);
      }
    )
   
  }

}
