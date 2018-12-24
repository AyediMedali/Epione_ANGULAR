import { Component, OnInit } from '@angular/core';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';

@Component({
  selector: 'app-doctolib-list',
  templateUrl: './doctolib-list.component.html',
  styleUrls: ['./doctolib-list.component.css']
})
export class DoctolibListComponent implements OnInit {

  message: string; 

  constructor(private doctolibService : DoctolibServicesService) {
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


}
