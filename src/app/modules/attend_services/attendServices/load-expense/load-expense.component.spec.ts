import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExpenseComponent } from './load-expense.component';

describe('LoadExpenseComponent', () => {
  let component: LoadExpenseComponent;
  let fixture: ComponentFixture<LoadExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
