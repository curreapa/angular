import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConcursoComponent } from './tabla-concurso.component';

describe('TablaConcursoComponent', () => {
  let component: TablaConcursoComponent;
  let fixture: ComponentFixture<TablaConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaConcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
