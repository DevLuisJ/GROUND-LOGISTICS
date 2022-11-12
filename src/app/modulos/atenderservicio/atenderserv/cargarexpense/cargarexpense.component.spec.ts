import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarexpenseComponent } from './cargarexpense.component';

describe('CargarexpenseComponent', () => {
  let component: CargarexpenseComponent;
  let fixture: ComponentFixture<CargarexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarexpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
