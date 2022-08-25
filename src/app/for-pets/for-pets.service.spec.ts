import { TestBed } from '@angular/core/testing';

import { ForPetsService } from './for-pets.service';

describe('ForPetsService', () => {
  let service: ForPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
