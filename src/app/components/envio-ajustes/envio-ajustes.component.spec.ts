import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioAjustesComponent } from './envio-ajustes.component';

describe('EnvioAjustesComponent', () => {
  let component: EnvioAjustesComponent;
  let fixture: ComponentFixture<EnvioAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioAjustesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
