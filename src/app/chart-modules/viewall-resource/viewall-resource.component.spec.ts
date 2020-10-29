import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallResourceComponent } from './viewall-resource.component';

describe('ViewallResourceComponent', () => {
  let component: ViewallResourceComponent;
  let fixture: ComponentFixture<ViewallResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
