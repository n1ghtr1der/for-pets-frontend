import { Router } from '@angular/router';
import { ForPetsService } from './../for-pets.service';
import { ForPets } from './../for-pets';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  animal!: ForPets;

  constructor(private forPetsService: ForPetsService, private router: Router) { }

  public showAnimalById(animalId: string): void {
    this.forPetsService.getAnimalById(animalId).subscribe({
      next: (animal) => {
        this.animal = animal;
      },
      error: (erro) => {
        alert("Animal no found!");
      }
    })
  }


  ngOnInit(): void {
    }

}
