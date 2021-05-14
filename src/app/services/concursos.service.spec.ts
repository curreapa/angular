import { TestBed } from '@angular/core/testing';

import { ConcursosService } from './concursos.service';

describe('ConcursosService', () => {
  let service: ConcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
