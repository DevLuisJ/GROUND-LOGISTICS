import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServiceComponent } from './editar-service.component';

describe('EditarServiceComponent', () => {
  let component: EditarServiceComponent;
  let fixture: ComponentFixture<EditarServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
