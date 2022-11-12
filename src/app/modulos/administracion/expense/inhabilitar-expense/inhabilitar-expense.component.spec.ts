import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarExpenseComponent } from './inhabilitar-expense.component';

describe('InhabilitarExpenseComponent', () => {
  let component: InhabilitarExpenseComponent;
  let fixture: ComponentFixture<InhabilitarExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhabilitarExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhabilitarExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
