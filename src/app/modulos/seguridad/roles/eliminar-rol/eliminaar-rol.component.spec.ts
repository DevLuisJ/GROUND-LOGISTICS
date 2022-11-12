import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaarRolComponent } from './eliminaar-rol.component';

describe('EliminaarRolComponent', () => {
  let component: EliminaarRolComponent;
  let fixture: ComponentFixture<EliminaarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
