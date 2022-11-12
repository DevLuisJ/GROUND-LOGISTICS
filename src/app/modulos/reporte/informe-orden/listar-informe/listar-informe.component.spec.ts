import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformeComponent } from './listar-informe.component';

describe('ListarInformeComponent', () => {
  let component: ListarInformeComponent;
  let fixture: ComponentFixture<ListarInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
