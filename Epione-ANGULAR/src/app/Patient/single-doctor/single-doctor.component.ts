import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { doctor } from 'src/app/entities/doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-doctor',
  templateUrl: './single-doctor.component.html',
  styleUrls: ['./single-doctor.component.css']
})
export class SingleDoctorComponent implements OnInit {

  constructor(private doctorService : UserService,private route:ActivatedRoute) { }

  d : doctor ;
  DoctorId : number ;

  
  ngOnInit() {
   
    this.route.params.subscribe(params => {
      this.DoctorId = params['param'] ; 
    })
    this.doctorService.getSingleDoctor(this.DoctorId).subscribe((Data) => {
      this.d = Data ; 
    })
   
  }

}
