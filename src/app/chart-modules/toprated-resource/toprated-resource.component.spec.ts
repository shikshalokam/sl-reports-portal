import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedResourceComponent } from './toprated-resource.component';

describe('TopratedResourceComponent', () => {
  let component: TopratedResourceComponent;
  let fixture: ComponentFixture<TopratedResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
