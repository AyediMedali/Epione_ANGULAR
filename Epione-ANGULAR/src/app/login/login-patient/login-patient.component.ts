import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

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
    this.userService.LoginPatient(email,password).subscribe( 
      (Data) => {
        console.log(Data);
      }
    )
   
  }

}
