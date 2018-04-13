import { TestBed, inject } from '@angular/core/testing';

import { LlenarTablaService } from './llenar-tabla.service';

describe('LlenarTablaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlenarTablaService]
    });
  });

  it('should be created', inject([LlenarTablaService], (service: LlenarTablaService) => {
    expect(service).toBeTruthy();
  }));
});
