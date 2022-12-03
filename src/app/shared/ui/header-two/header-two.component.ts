import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  active: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickActive() {
    this.active = !this.active
  }

  onClickNavigate(path: string) {
    this.router.navigate([path])
  }

}
