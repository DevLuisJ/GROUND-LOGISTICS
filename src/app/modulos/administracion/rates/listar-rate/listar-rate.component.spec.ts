import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRateComponent } from './listar-rate.component';

describe('ListarRateComponent', () => {
  let component: ListarRateComponent;
  let fixture: ComponentFixture<ListarRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
