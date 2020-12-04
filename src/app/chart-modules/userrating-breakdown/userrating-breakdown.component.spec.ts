import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserratingBreakdownComponent } from './userrating-breakdown.component';

describe('UserratingBreakdownComponent', () => {
  let component: UserratingBreakdownComponent;
  let fixture: ComponentFixture<UserratingBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserratingBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserratingBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
