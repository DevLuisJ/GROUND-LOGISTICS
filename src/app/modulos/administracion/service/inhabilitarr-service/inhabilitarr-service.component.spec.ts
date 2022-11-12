import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarrServiceComponent } from './inhabilitarr-service.component';

describe('InhabilitarrServiceComponent', () => {
  let component: InhabilitarrServiceComponent;
  let fixture: ComponentFixture<InhabilitarrServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhabilitarrServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhabilitarrServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
