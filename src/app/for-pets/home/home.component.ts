import { ForPets } from './../for-pets';
import { Component, OnInit } from '@angular/core';
import { ForPetsService } from '../for-pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animal: ForPets[] = []

  constructor(private forPetsService: ForPetsService) { }

  public getAllAnimals(): void {
    this.forPetsService.getAllAnimals().subscribe({
      next: (animals) => {
        this.animal = animals;
      }
    })
  }

  public getAnimalsBySpecie(animalSpecie: string): void {
    this.forPetsService.getAnimalsBySpecie(animalSpecie).subscribe((animals) => this.animal = animals)
  }

  public getAnimalsByWeightRange(minWeight: string, maxWeight: string): void {
    this.forPetsService.getAnimalsByWeightRange(minWeight, maxWeight).subscribe({
      next: (animals) => {
        this.animal = animals;
      }
    })
  }


  ngOnInit() {
    this.getAllAnimals();
  }

}
