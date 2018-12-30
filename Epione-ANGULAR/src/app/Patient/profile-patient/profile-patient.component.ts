import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { patient } from 'src/app/entities/patient';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  constructor(private patientService : UserService) { }

  connectedPatient : patient ; 
  listeComments = [] ; 

  ngOnInit() { 
    this.patientService.getPatientById().subscribe((Data)=>{
      this.connectedPatient = Data ; 
    })
    this.patientService.getCommentPatient(this.connectedPatient).subscribe((Data)=>{
      this.listeComments = Data ; 
    })
  }

}
