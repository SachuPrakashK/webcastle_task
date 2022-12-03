import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
