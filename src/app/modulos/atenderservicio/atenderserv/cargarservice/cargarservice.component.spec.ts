import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarserviceComponent } from './cargarservice.component';

describe('CargarserviceComponent', () => {
  let component: CargarserviceComponent;
  let fixture: ComponentFixture<CargarserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
