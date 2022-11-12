import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignardriverComponent } from './asignardriver.component';

describe('AsignardriverComponent', () => {
  let component: AsignardriverComponent;
  let fixture: ComponentFixture<AsignardriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignardriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignardriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
