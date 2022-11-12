import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRateComponent } from './editar-rate.component';

describe('EditarRateComponent', () => {
  let component: EditarRateComponent;
  let fixture: ComponentFixture<EditarRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
