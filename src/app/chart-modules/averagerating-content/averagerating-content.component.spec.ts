import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageratingContentComponent } from './averagerating-content.component';

describe('AverageratingContentComponent', () => {
  let component: AverageratingContentComponent;
  let fixture: ComponentFixture<AverageratingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageratingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageratingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
