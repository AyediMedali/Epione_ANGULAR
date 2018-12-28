import { Component, OnInit, OnChanges } from '@angular/core';
import { DoctolibServicesService } from 'src/app/services/doctolib-services.service';
import { demande } from 'src/app/entities/demande';
import { Response } from '@angular/http';
import { doctor } from 'src/app/entities/doctor';

@Component({
  selector: 'app-admin-list-demandes',
  templateUrl: './admin-list-demandes.component.html',
  styleUrls: ['./admin-list-demandes.component.css']
})
export class AdminListDemandesComponent implements OnInit,OnChanges {


  demande : demande ={
    id : 0 ,
    email : "" ,
    firstName:"",
    lastName:"",
    specialite:"",
    ville:""
  } ; 
  addedDoctor : Object ;
  listDemandes= [] ;
  constructor(private serviceDoctolib : DoctolibServicesService) { }

  ngOnInit() {
   this.serviceDoctolib.getDemandes().subscribe(
     Data => {
       this.listDemandes = Data;
     }
   )
  }
  ngOnChanges(){
    this.serviceDoctolib.getDemandes().subscribe(
      Data => {
        this.listDemandes = Data;
      }
    )
  }
  Cancel(dem)
  {
    console.log("email is : "+dem) ;
    this.demande= dem ;
    console.log("selcted is " + this.demande.email) ;
   this.serviceDoctolib.deleteDemande(this.demande).subscribe(
      (data )=>{
        if(data)
        {
          if(data['email'])
          {
            this.listDemandes.splice(this.listDemandes.indexOf(this.demande) , 1) ;
          }
        }
       // this.demands.splice(this.demands.indexOf(demand), 1);
      }
    ) ;
  }
  Approve(dem)
  {
    this.demande = dem ;
    this.serviceDoctolib.acceptDemande(this.demande).subscribe(
      (data) => {
        if(data)
        {
          if(data['email'])
          {
            if(data['id']>0)
            {
                this.addedDoctor = data ;
                console.log(this.addedDoctor) ;
            }
          }
        }
      }
    )
  }
}
