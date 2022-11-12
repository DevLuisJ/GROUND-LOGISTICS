import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServiceComponent } from './listar-service.component';

describe('ListarServiceComponent', () => {
  let component: ListarServiceComponent;
  let fixture: ComponentFixture<ListarServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
