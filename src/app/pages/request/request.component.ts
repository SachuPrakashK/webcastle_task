import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/shared/services/Main/main.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  appointmentForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) { }

  ngOnInit(): void {

    this.appointmentForm = this.formBuilder.group({
      name: [""],
      mobileNumber: [""],
      email: [""],
      message: [""],
      NRIQuota: [false],
      Scholarship: [false],
      InstituteRegistration: [false],
      InstituteRegistrationSecond: [false]
    })
  }


  addAppointment() {

    let availableOptions = [];
    if (this.appointmentForm.value.NRIQuota) availableOptions.push("NRI Quota");
    if (this.appointmentForm.value.Scholarship) availableOptions.push("Scholarship");
    if (this.appointmentForm.value.InstituteRegistration) availableOptions.push("Institute Registration");
    if (this.appointmentForm.value.InstituteRegistrationSecond) availableOptions.push("Institute Registration");

    const obj = {
      name: this.appointmentForm.value.name,
      phone: this.appointmentForm.value.mobileNumber,
      email: this.appointmentForm.value.email,
      message: this.appointmentForm.value.message,
      option: availableOptions
    }

    // console.log('Object response', obj);

    this.mainService.addAppointments(obj).subscribe((res) => {
      // console.log('Appointment response', res);
      if(res) {
        alert('Your details are submitted successfully')
        window.location.reload();
      }
      else {
        alert('Please try it again!')
      }
    })
  }


}
