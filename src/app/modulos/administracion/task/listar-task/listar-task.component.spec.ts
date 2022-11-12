import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTaskComponent } from './listar-task.component';

describe('ListarTaskComponent', () => {
  let component: ListarTaskComponent;
  let fixture: ComponentFixture<ListarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
