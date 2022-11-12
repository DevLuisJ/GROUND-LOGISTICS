import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCvComponent } from './listar-cv.component';

describe('ListarCvComponent', () => {
  let component: ListarCvComponent;
  let fixture: ComponentFixture<ListarCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
