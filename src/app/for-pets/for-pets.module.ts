import { ForPetsRoutingModule } from './for-pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ForPetsRoutingModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class ForPetsModule { }
