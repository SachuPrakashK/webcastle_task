import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/Main/main.service';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  active: boolean = true;

  jobsArray: any[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {

    this.getJobs();

  }

  getJobs() {
    this.mainService.getAllJobs().subscribe((res) => {
      // console.log('Jobs response', res);
      if(res) {
        this.jobsArray = res.Data;
      }
      else {
        this.jobsArray = [];
      }
    })
  }

  onClickActive() {
    this.active = !this.active
  }

}
