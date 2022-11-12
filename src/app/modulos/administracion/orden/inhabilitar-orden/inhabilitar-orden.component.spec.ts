import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarOrdenComponent } from './inhabilitar-orden.component';

describe('InhabilitarOrdenComponent', () => {
  let component: InhabilitarOrdenComponent;
  let fixture: ComponentFixture<InhabilitarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhabilitarOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhabilitarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
