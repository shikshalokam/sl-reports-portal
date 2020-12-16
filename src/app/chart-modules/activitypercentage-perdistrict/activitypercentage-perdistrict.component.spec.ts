import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitypercentagePerdistrictComponent } from './activitypercentage-perdistrict.component';

describe('ActivitypercentagePerdistrictComponent', () => {
  let component: ActivitypercentagePerdistrictComponent;
  let fixture: ComponentFixture<ActivitypercentagePerdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitypercentagePerdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitypercentagePerdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
