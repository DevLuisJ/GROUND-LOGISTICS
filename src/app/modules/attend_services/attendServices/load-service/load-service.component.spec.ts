import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadServiceComponent } from './load-service.component';

describe('LoadServiceComponent', () => {
  let component: LoadServiceComponent;
  let fixture: ComponentFixture<LoadServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
