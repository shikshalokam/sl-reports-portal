import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageVarianceComponent } from './percentage-variance.component';

describe('PercentageVarianceComponent', () => {
  let component: PercentageVarianceComponent;
  let fixture: ComponentFixture<PercentageVarianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageVarianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageVarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
