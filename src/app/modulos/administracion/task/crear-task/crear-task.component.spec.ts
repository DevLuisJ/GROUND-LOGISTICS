import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTaskComponent } from './crear-task.component';

describe('CrearTaskComponent', () => {
  let component: CrearTaskComponent;
  let fixture: ComponentFixture<CrearTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
