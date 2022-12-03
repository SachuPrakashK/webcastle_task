import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { ApiResponse } from './../../../core/models/ApiResponse';
import { CommonService } from './../common/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService
  ) {}

  private httpOptions = {
    headers: new HttpHeaders()
  };

  getAllJobs() {
    return this.httpClient
    .get<ApiResponse>(
      this.commonService.apiURL + '/api/user/getJobs',
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.commonService.handleError));
  }

  
  getAllExams() {
    return this.httpClient
    .get<ApiResponse>(
      this.commonService.apiURL + '/api/user/getExams',
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.commonService.handleError));
  }

  addAppointments(obj: any) {
    return this.httpClient
    .post<ApiResponse>(
      this.commonService.apiURL + '/api/user/appointment ',
      obj,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.commonService.handleError));
  }
}
