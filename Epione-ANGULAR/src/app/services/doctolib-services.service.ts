import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import { doctor } from '../entities/doctor';
import { demande } from '../entities/demande';


@Injectable({
  providedIn: 'root'
})
export class DoctolibServicesService {

  private headers = new HttpHeaders().set('content-type', 'application/json');

  private dataSource = new BehaviorSubject<string>("default message");
  currentData = this.dataSource.asObservable();


  public selectedDoctor : doctor ;

  constructor(private http : HttpClient) { }


  getDoctolib(specialite:string) : Observable<doctor[]>{
    return this.http.get<doctor[]>("http://localhost:18080/Epione-web/rest/doctolib/getAll/"+specialite) ;
   }

   changeData(data : string)
   {
      this.dataSource.next(data);
   }

   getDemandes()
   {
     return this.http.get<demande[]>("http://localhost:18080/Epione-web/rest/doctolib/getDemande");
   }
   deleteDemande(demande:demande)
   {
    return this.http.post("http://localhost:18080/Epione-web/rest/doctolib/RejectDemande",demande,{headers:this.headers});
   }
   acceptDemande(demande:demande)
   {
    return this.http.post("http://localhost:18080/Epione-web/rest/doctolib/AcceptDemande",demande,{headers:this.headers});    
   }

   getDoctorDetails( doc : doctor)
   {

      console.log("bch todkheeel") ;

      let dem : demande ;
      dem.firstName = doc.firstName ;
      dem.lastName = doc.lastName ; 
      dem.specialite = doc.specialite;
      dem.ville = doc.adresse.ville ;
    return this.http.post<doctor>("http://localhost:18080/Epione-web/rest/doctolib/getDetails/",dem,{headers: this.headers} ) ;
   }

   addDemande(demande:  demande)
   {
     return this.http.post("http://localhost:18080/Epione-web/rest/doctolib/ajoutDemande",demande,{headers: this.headers}) ; 
   }



   public getSelectedDoctor(): doctor {
      return this.selectedDoctor;
  }

  public setSelectedDoctor(doctor: any): void {
      this.selectedDoctor = doctor;
  }

}
