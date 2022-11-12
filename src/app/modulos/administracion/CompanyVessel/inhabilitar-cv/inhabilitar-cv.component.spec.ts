import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarCvComponent } from './inhabilitar-cv.component';

describe('InhabilitarCvComponent', () => {
  let component: InhabilitarCvComponent;
  let fixture: ComponentFixture<InhabilitarCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhabilitarCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhabilitarCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
