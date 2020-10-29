import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyactivityGrowthComponent } from './dailyactivity-growth.component';

describe('DailyactivityGrowthComponent', () => {
  let component: DailyactivityGrowthComponent;
  let fixture: ComponentFixture<DailyactivityGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyactivityGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyactivityGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
