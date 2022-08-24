import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForPets } from './../for-pets';
import { Component, OnInit } from '@angular/core';
import { ForPetsService } from '../for-pets.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  animal!: ForPets;

  constructor(private forPetsService: ForPetsService, private router: Router) { }

  public editAnimal(animalId: string, editForm: NgForm): void {
    this.forPetsService.editAnimal(animalId, editForm.value).subscribe({
      next: () => {
        alert(`Animal ID ${this.animal.id}`);
        this.router.navigateByUrl('home');
      },
      error: () => {
        alert(`Animal not found or some form is empty!`);
      }
    })
  }

  ngOnInit(): void {
  }

}
