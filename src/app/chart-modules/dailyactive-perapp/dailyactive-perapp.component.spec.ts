import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyactivePerappComponent } from './dailyactive-perapp.component';

describe('DailyactivePerappComponent', () => {
  let component: DailyactivePerappComponent;
  let fixture: ComponentFixture<DailyactivePerappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyactivePerappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyactivePerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
