import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDoctorsComponent } from '../Patient/list-doctors/list-doctors.component';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../user/home/home.component';
import { LoginAdminComponent } from '../user/login/login-admin/login-admin.component';
import { LoginPatientComponent } from '../user/login/login-patient/login-patient.component';
import { LoginDoctorComponent } from '../user/login/login-doctor/login-doctor.component';
import { RegisterComponent } from '../user/register/register.component';
import { PatientComponent } from '../patient/patient.component';
import { HomePatientComponent } from '../patient/home-patient/home-patient.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { HomeDoctorComponent } from '../Doctor/home-doctor/home-doctor.component';
import { AdminComponent } from '../admin/admin.component';
import { HomeAdminComponent } from '../Admin/home-admin/home-admin.component';
import { SingleDoctorComponent } from '../Patient/single-doctor/single-doctor.component';
import { DoctolibListComponent } from '../Patient/doctolib/doctolib-list/doctolib-list.component';
import { DoctoDetailComponent } from '../patient/doctolib/docto-detail/docto-detail.component';
import { DemandeAddComponent } from '../user/demande-add/demande-add.component';
import { AdminListDemandesComponent } from '../Admin/admin-list-demandes/admin-list-demandes.component';
import { HelpPatientComponent } from '../patient/help-patient/help-patient.component';
import { ProfilePatientComponent } from '../Patient/profile-patient/profile-patient.component';


const routes: Routes = [
  {path: '', redirectTo: 'guest/home', pathMatch: 'full'},
   {path:'guest',component:UserComponent, children : [
    {path:'home' , component:HomeComponent},
    {path:'loginAdmin' ,component:LoginAdminComponent},
    {path:'loginPatient' ,component:LoginPatientComponent},
    {path:'loginDoctor' ,component:LoginDoctorComponent},
    {path:'register', component:RegisterComponent},
    {path:'loginPatient/register', component:RegisterComponent}, 
    {path:'demandeDoctolib',component:DemandeAddComponent}
   ]},
 {path:'patient',component:PatientComponent, children : [
  {path:'homePatient' , component:HomePatientComponent},
  {path:'listDoctors', component:ListDoctorsComponent},
  {path:'help', component: HelpPatientComponent} , 
  {path:'profilePatient', component: ProfilePatientComponent} , 
  {path:'listDoctors/details/:param', component:SingleDoctorComponent},
  {path:'homePatient/details/:param', component:SingleDoctorComponent},
  {path:'doctolibliste', component:DoctolibListComponent},
  {path:'doctolibdetails' , component:DoctoDetailComponent}

 ]} ,
 {path:'doctor',component:DoctorComponent, children : [
  {path:'homeDoctor' , component:HomeDoctorComponent}
 ]} ,
 {path:'admin',component:AdminComponent, children : [
  {path:'homeAdmin', component:HomeAdminComponent},
  {path:'ListAdminDemandes' , component:AdminListDemandesComponent}
 ]} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
