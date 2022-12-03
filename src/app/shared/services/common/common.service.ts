import { BehaviorSubject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public apiURL: string = "http://dev3.webcastle.in/myzeed"; 

  constructor() { }


  handleError(error: any) {

    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);

    return throwError(errorMessage);
  }

}
