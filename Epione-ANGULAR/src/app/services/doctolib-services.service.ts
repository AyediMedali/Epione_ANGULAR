import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { doctor } from '../entities/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctolibServicesService {

  private dataSource = new BehaviorSubject<string>("default message");
  currentData = this.dataSource.asObservable();

  constructor(private http : HttpClient) { }


  getDoctolib(specialite:string) : Observable<doctor[]>{
    return this.http.get<doctor[]>("http://localhost:18080/Epione-web/rest/doctolib/getAll/"+specialite) ;
   }

   changeData(data : string)
   {
      this.dataSource.next(data);
   }
}
