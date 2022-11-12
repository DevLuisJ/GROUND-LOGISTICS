import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInformeComponent } from './crear-informe.component';

describe('CrearInformeComponent', () => {
  let component: CrearInformeComponent;
  let fixture: ComponentFixture<CrearInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
