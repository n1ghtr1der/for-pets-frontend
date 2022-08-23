import { ForPetsRoutingModule } from './for-pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    ForPetsRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    RegistrationPageComponent
  ]
})
export class ForPetsModule { }
