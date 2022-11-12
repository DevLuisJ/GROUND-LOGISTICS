import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExpenseComponent } from './crear-expense.component';

describe('CrearExpenseComponent', () => {
  let component: CrearExpenseComponent;
  let fixture: ComponentFixture<CrearExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
