import { Router } from '@angular/router';
import { ForPets } from './../for-pets';
import { Component, OnInit } from '@angular/core';
import { ForPetsService } from '../for-pets.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  animal: ForPets[] = [];

  constructor(private forPetsService: ForPetsService, private router: Router) { }

  public registrateAnimal(createForm: NgForm): void {
    this.forPetsService.addAnimal(createForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('home');
      },
      error: (Error: HttpErrorResponse) => {
        alert(Error.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
