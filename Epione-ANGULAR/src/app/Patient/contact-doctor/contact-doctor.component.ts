import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { doctor } from 'src/app/entities/doctor';

@Component({
  selector: 'app-contact-doctor',
  templateUrl: './contact-doctor.component.html',
  styleUrls: ['./contact-doctor.component.css']
})
export class ContactDoctorComponent implements OnInit {

  constructor(private route:ActivatedRoute, private doctorService : UserService) { }

  DoctorId : number ; 
  docteur : doctor ; 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.DoctorId = params['param'] ; 
    })

    this.doctorService.getSingleDoctor(this.DoctorId).subscribe((Data)=>{
      this.docteur = Data ; 
    })
  }

}
