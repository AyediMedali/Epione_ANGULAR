import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
   
  {path:'home' , component:HomeComponent}, 
  {path:'login' ,component:LoginComponent},
  {path:'login/register', component:RegisterComponent},
  {path:'register', component:RegisterComponent}, 
  {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }