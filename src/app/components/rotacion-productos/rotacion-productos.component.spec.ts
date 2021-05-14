import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacionProductosComponent } from './rotacion-productos.component';

describe('RotacionProductosComponent', () => {
  let component: RotacionProductosComponent;
  let fixture: ComponentFixture<RotacionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotacionProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotacionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
