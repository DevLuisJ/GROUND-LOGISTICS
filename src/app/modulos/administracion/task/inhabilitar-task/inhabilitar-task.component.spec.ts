import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarTaskComponent } from './inhabilitar-task.component';

describe('InhabilitarTaskComponent', () => {
  let component: InhabilitarTaskComponent;
  let fixture: ComponentFixture<InhabilitarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhabilitarTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhabilitarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
