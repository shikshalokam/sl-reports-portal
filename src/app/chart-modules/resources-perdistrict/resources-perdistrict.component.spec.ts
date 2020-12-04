import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesPerdistrictComponent } from './resources-perdistrict.component';

describe('ResourcesPerdistrictComponent', () => {
  let component: ResourcesPerdistrictComponent;
  let fixture: ComponentFixture<ResourcesPerdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesPerdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesPerdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
