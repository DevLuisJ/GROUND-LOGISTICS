import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTaskComponent } from './editar-task.component';

describe('EditarTaskComponent', () => {
  let component: EditarTaskComponent;
  let fixture: ComponentFixture<EditarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
