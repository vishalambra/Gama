import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
// import { CommonServiceService } from '../../services/common-service.service';

export const routes: Routes =[
  { path : '', component: LoginComponent},
  { path : 'login', component: LoginComponent},
  { path : 'sign-up', component: SignUpComponent}
];


@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [LoginComponent, SignUpComponent]
})
export class OnboardingModule { 
  constructor (){
  }
}
