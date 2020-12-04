import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentagePergroupComponent } from './percentage-pergroup.component';

describe('PercentagePergroupComponent', () => {
  let component: PercentagePergroupComponent;
  let fixture: ComponentFixture<PercentagePergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentagePergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentagePergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
