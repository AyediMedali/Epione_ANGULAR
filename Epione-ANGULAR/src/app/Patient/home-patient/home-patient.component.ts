import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { doctor } from 'src/app/entities/doctor';


@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {


  message : string ;
  ListDoctors = [] ;
  specialites = [] ;
  doctor :doctor ;
  specSearch = this.fb.group({
    specialite: [''] 
  })

  constructor(private doctorService : UserService ,private fb:FormBuilder , private doctolibService:DoctolibServicesService , private router : Router)
  {
    this.doctolibService.currentData.subscribe((data) => this.message=data);
  }


  ngOnInit() {
    this.doctorService.getDoctors().subscribe(
      (Data) => {
        this.ListDoctors = Data ; 
        console.log("doctors"+Data);
        let i=0 ;
        for(let x of this.ListDoctors)
        {
          if(i==0){ this.doctor =x;
          i++;
          }
          else {
            if(x.dateCreation > this.doctor.dateCreation)
            {
              this.doctor = x;
            }
          }
        }
        console.log(this.doctor) ;
      }
     )
     this.doctolibService.getSpecialites().subscribe(
      Data => {
        this.specialites = Data;
      }
    )
  }

  OnSubmit()
  {
    let spec =  this.specSearch.get('specialite').value ;
    this.doctolibService.changeData(spec);
    this.router.navigate(['patient/doctolibliste']) ;

  }

}
