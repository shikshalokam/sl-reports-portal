import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopscoreAllquizzesComponent } from './topscore-allquizzes.component';

describe('TopscoreAllquizzesComponent', () => {
  let component: TopscoreAllquizzesComponent;
  let fixture: ComponentFixture<TopscoreAllquizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopscoreAllquizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopscoreAllquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
