import { Router } from '@angular/router';
import { ForPets } from './../for-pets';
import { Component, OnInit } from '@angular/core';
import { ForPetsService } from '../for-pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animals: ForPets[] = []
  animal!: ForPets;

  constructor(private forPetsService: ForPetsService, private router: Router) { }

  public getAllAnimals(): void {
    this.forPetsService.getAllAnimals().subscribe({
      next: (animals) => {
        this.animals = animals;
      }
    })
  }

  public getAnimalsBySpecie(animalSpecie: string): void {
    this.forPetsService.getAnimalsBySpecie(animalSpecie).subscribe((animals) => this.animals = animals)
  }

  public getAnimalsByWeightRange(minWeight: string, maxWeight: string): void {
    this.forPetsService.getAnimalsByWeightRange(minWeight, maxWeight).subscribe({
      next: (animals) => {
        this.animals = animals;
      }
    })
  }

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

  public deleteAnimal(animalId: string): void {
    this.forPetsService.deleteAnimal(animalId).subscribe({
      next: () => {
        alert("Animal deleted!");
        this.getAllAnimals();
      },
      error: () => {
        alert("Animal ID not found!");
      }
    })
  }


  ngOnInit() {
    this.getAllAnimals();
  }

}
