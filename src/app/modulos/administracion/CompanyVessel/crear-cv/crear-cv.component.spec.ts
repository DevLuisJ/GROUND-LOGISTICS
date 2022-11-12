import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCvComponent } from './crear-cv.component';

describe('CrearCvComponent', () => {
  let component: CrearCvComponent;
  let fixture: ComponentFixture<CrearCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
