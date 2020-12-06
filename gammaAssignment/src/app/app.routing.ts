import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingModule } from "./modules/onboarding/onboarding.module";

export const routes: Routes =[
    { path : 'onboard', loadChildren: './modules/onboarding/onboarding.module#OnboardingModule',data: { preload: true }},
    { path : 'experience', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
    { path : '', redirectTo: 'onboard' , pathMatch: 'full'},
    { path : '**', redirectTo: 'onboard'}
    // { path : '', data: { preload: true }, loadChildren: './modules/onboarding/onboarding.module#OnboardingModule'},
    // { path : 'login', loadChildren: './modules/onboarding/onboarding.module#OnboardingModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }