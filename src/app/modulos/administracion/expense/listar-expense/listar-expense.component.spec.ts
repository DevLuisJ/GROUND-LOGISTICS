import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExpenseComponent } from './listar-expense.component';

describe('ListarExpenseComponent', () => {
  let component: ListarExpenseComponent;
  let fixture: ComponentFixture<ListarExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
