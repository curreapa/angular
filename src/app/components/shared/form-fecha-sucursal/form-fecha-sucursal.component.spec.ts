import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFechaSucursalComponent } from './form-fecha-sucursal.component';

describe('FormFechaSucursalComponent', () => {
  let component: FormFechaSucursalComponent;
  let fixture: ComponentFixture<FormFechaSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFechaSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFechaSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
