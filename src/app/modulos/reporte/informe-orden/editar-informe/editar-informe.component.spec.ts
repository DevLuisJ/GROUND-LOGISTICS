import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformeComponent } from './editar-informe.component';

describe('EditarInformeComponent', () => {
  let component: EditarInformeComponent;
  let fixture: ComponentFixture<EditarInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
