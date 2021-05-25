import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAjustesComponent } from './tabla-ajustes.component';

describe('TablaAjustesComponent', () => {
  let component: TablaAjustesComponent;
  let fixture: ComponentFixture<TablaAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAjustesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
