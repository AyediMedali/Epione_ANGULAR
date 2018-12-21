import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { LoginAdminComponent } from '../login/login-admin/login-admin.component';
import { LoginPatientComponent } from '../login/login-patient/login-patient.component';
import { LoginDoctorComponent } from '../login/login-doctor/login-doctor.component';

const routes: Routes = [
   
  {path:'home' , component:HomeComponent}, 
  {path:'loginAdmin' ,component:LoginAdminComponent},
  {path:'loginPatient' ,component:LoginPatientComponent},
  {path:'loginDoctor' ,component:LoginDoctorComponent},
  {path:'register', component:RegisterComponent}, 
  {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
