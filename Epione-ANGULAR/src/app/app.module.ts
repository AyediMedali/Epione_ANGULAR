import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { ListDoctorsComponent } from './Patient/list-doctors/list-doctors.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './user/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginAdminComponent } from './user/login/login-admin/login-admin.component';
import { LoginDoctorComponent } from './user/login/login-doctor/login-doctor.component';
import { LoginPatientComponent } from './user/login/login-patient/login-patient.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';
import { HomePatientComponent } from './patient/home-patient/home-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeDoctorComponent } from './Doctor/home-doctor/home-doctor.component';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginAdminComponent,
    LoginDoctorComponent,
    LoginPatientComponent,
    ListDoctorsComponent,
    UserComponent,
    PatientComponent,
    HomePatientComponent,
    DoctorComponent,
    HomeDoctorComponent,
    AdminComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
