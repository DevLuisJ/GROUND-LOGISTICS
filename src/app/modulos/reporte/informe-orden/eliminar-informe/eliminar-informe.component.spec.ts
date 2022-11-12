import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInformeComponent } from './eliminar-informe.component';

describe('EliminarInformeComponent', () => {
  let component: EliminarInformeComponent;
  let fixture: ComponentFixture<EliminarInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
