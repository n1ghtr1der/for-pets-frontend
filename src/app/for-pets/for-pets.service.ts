import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForPets } from './for-pets';

@Injectable({
  providedIn: 'root'
})
export class ForPetsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllAnimals(): Observable<ForPets[]> {
    return this.http.get<ForPets[]>(`${this.apiServerUrl}/for-pets/showAll`);
  }

  public getAnimalById(animalId: string): Observable<ForPets> {
    return this.http.get<ForPets>(`${this.apiServerUrl}/for-pets/show/${animalId}`);
  }

  public getAnimalsBySpecie(animalSpecie: string): Observable<ForPets[]> {
    return this.http.get<ForPets[]>(`${this.apiServerUrl}/for-pets/${animalSpecie}`);
  }

  public getAnimalsByWeightRange(MinWeight: number, MaxWeight: number): Observable<ForPets[]> {
    return this.http.get<ForPets[]>(`${this.apiServerUrl}/for-pets/weightRange?start=${MinWeight}&end=${MaxWeight}`);
  }

  public addAnimal(animal: ForPets): Observable<ForPets> {
    return this.http.post<ForPets>(`${this.apiServerUrl}/for-pets/create`, animal);
  }

  public deleteAnimal(animalId: string): any {
    return this.http.delete(`${this.apiServerUrl}/for-pets/delete/${animalId}`);
  }

  public editAnimal(animalId: string, animal: ForPets): Observable<ForPets> {
    return this.http.put<ForPets>(`${this.apiServerUrl}/for-pets/update/${animalId}`, animal);
  }
}
