import { Component, OnInit } from '@angular/core';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';
import { doctor } from 'src/app/entities/doctor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctolib-list',
  templateUrl: './doctolib-list.component.html',
  styleUrls: ['./doctolib-list.component.css']
})
export class DoctolibListComponent implements OnInit {

  message: string; 
  selectedDoctor : doctor ;

  constructor(private doctolibService : DoctolibServicesService , private router : Router) {
    this.doctolibService.currentData.subscribe((data) => this.message=data);

   }

  ListDoctors = [] ;

  ngOnInit() {

    this.doctolibService.getDoctolib(this.message).subscribe(
      (Data) => {
        this.ListDoctors = Data ; 
        console.log("doctors"+Data);
      }
     )
  }

  getDetails(d : doctor)
  {
    this.doctolibService.setSelectedDoctor(d) ;
    this.router.navigate(['patient/doctolibdetails']) ;
  }




}
