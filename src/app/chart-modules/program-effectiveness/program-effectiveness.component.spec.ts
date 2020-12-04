import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramEffectivenessComponent } from './program-effectiveness.component';

describe('ProgramEffectivenessComponent', () => {
  let component: ProgramEffectivenessComponent;
  let fixture: ComponentFixture<ProgramEffectivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramEffectivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
