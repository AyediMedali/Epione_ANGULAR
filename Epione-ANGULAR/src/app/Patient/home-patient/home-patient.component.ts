import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {


  message : string ;

  specSearch = this.fb.group({
    specialite: [''] 
  })

  constructor(private fb:FormBuilder , private doctolibService:DoctolibServicesService , private router : Router) {
    this.doctolibService.currentData.subscribe((data) => this.message=data);

  }


  ngOnInit() {
  }

  OnSubmit()
  {
    let spec =  this.specSearch.get('specialite').value ;
    this.doctolibService.changeData(spec);
    this.router.navigate(['patient/doctolibliste']) ;

  }

}
