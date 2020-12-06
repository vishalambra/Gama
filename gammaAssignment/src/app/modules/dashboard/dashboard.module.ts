import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobHistoryComponent } from './job-history/job-history.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes =[
  { path : '', component: JobHistoryComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [JobHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
