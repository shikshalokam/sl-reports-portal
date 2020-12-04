import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserneverloggedinComponent } from './userneverloggedin.component';

describe('UserneverloggedinComponent', () => {
  let component: UserneverloggedinComponent;
  let fixture: ComponentFixture<UserneverloggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserneverloggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserneverloggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
