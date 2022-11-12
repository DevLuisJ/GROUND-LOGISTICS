import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAsistenciaComponent } from './eliminar-asistencia.component';

describe('EliminarAsistenciaComponent', () => {
  let component: EliminarAsistenciaComponent;
  let fixture: ComponentFixture<EliminarAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAsistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
