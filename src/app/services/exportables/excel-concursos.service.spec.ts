import { TestBed } from '@angular/core/testing';

import { ExcelConcursosService } from './excel-concursos.service';

describe('ExcelConcursosService', () => {
  let service: ExcelConcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelConcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
