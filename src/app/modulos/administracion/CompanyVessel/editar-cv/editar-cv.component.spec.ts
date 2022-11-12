import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCvComponent } from './editar-cv.component';

describe('EditarCvComponent', () => {
  let component: EditarCvComponent;
  let fixture: ComponentFixture<EditarCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
