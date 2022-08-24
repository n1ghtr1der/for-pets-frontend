import { ForPetsRoutingModule } from './for-pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';
import { InformationPageComponent } from './information-page/information-page.component';
import { AccessibilityBarComponent } from './accessibility-bar/accessibility-bar.component';
import { EditPageComponent } from './edit-page/edit-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    RegistrationPageComponent,
    InformationPageComponent,
    AccessibilityBarComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    ForPetsRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    RegistrationPageComponent,
    InformationPageComponent,
    AccessibilityBarComponent,
    EditPageComponent
  ]
})
export class ForPetsModule { }
