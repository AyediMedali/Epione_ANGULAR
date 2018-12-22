import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginDoctorComponent } from './login/login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login/login-patient/login-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginAdminComponent,
    LoginDoctorComponent,
    LoginPatientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
