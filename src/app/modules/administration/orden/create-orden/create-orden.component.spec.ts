import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrdenComponent } from './create-orden.component';

describe('CreateOrdenComponent', () => {
  let component: CreateOrdenComponent;
  let fixture: ComponentFixture<CreateOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
