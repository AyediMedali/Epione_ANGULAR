import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Logout()
  {
    console.log('logged out before :' +localStorage.getItem('userId')) ;
    localStorage.clear() ;
    console.log('logged out after : '+ localStorage.getItem('userId')) ;
  }
}
