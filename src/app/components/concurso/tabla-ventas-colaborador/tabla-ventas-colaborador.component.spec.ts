import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVentasColaboradorComponent } from './tabla-ventas-colaborador.component';

describe('TablaVentasColaboradorComponent', () => {
  let component: TablaVentasColaboradorComponent;
  let fixture: ComponentFixture<TablaVentasColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVentasColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVentasColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
