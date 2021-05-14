import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladosComponent } from './controlados.component';

describe('ControladosComponent', () => {
  let component: ControladosComponent;
  let fixture: ComponentFixture<ControladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
