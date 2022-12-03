import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/Main/main.service';

@Component({
  selector: 'app-top-exam',
  templateUrl: './top-exam.component.html',
  styleUrls: ['./top-exam.component.scss']
})
export class TopExamComponent implements OnInit {

  examsArray: any[] = [];

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit(): void {

    this.getExams();

  }

  getExams() {
    this.mainService.getAllExams().subscribe((res) => {
      // console.log('Exams response', res);
      if(res) {
        this.examsArray = res.Data;
      }
      else {
        this.examsArray = [];
      }
    })
  }

}
