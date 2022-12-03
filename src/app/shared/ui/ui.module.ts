import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderTwoComponent,
    HeaderThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderTwoComponent,
    HeaderThreeComponent
  ]
})
export class UiModule { }
