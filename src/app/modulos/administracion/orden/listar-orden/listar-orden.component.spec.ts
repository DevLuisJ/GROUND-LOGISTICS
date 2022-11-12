import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenComponent } from './listar-orden.component';

describe('ListarOrdenComponent', () => {
  let component: ListarOrdenComponent;
  let fixture: ComponentFixture<ListarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
