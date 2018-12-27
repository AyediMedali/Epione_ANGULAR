import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';
import { demande } from '../../entities/demande';

@Component({
  selector: 'app-demande-add',
  templateUrl: './demande-add.component.html',
  styleUrls: ['./demande-add.component.css']
})
export class DemandeAddComponent implements OnInit {

  demande : demande ;
  constructor(private fb:FormBuilder , private serviceDoctolib:DoctolibServicesService ) { }

  formDemande = this.fb.group({
    firstName : [''] ,
    lastName: ['']  ,
    email: [''] ,
    city: [''] , 
    speciality: ['']

  })
  ngOnInit() {
  }

  OnSubmit()
  {
    let firstName = this.formDemande.get('firstName').value ;
    let lastName = this.formDemande.get('lastName').value;
    let email = this.formDemande.get('email').value ;
    let city = this.formDemande.get('city').value ;
    let specialite = this.formDemande.get('speciality').value ;
    console.log("this is " + firstName) ;

    this.serviceDoctolib.addDemande(new demande(firstName,lastName,specialite,city,email)).subscribe(
      (data)=> {
        console.log(data) ;
      },error=> {
        console.log(error)
       }
    )
  }

}
