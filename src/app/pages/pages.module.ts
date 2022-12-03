import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorModule } from "./error/error.module";
import { UiModule } from "../shared/ui/ui.module";
import { TopExamComponent } from './top-exam/top-exam.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { RequestComponent } from './request/request.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopExamComponent,
    FindJobsComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule,
    ErrorModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
