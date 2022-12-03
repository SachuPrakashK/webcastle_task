import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { RequestComponent } from './request/request.component';
import { TopExamComponent } from './top-exam/top-exam.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/top-exam",
    pathMatch: "full",
  },
  {
    path: "top-exam",
    component: TopExamComponent
  },
  {
    path: "find-jobs",
    component: FindJobsComponent
  },
  {
    path: "request",
    component: RequestComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
