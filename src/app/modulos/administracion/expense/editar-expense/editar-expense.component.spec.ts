import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExpenseComponent } from './editar-expense.component';

describe('EditarExpenseComponent', () => {
  let component: EditarExpenseComponent;
  let fixture: ComponentFixture<EditarExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
