import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss']
})
export class HeaderThreeComponent implements OnInit {

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
