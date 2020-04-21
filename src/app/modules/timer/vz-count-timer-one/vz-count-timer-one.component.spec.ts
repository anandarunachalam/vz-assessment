import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountTimerOneComponent } from './vz-count-timer-one.component';

describe('VzCountTimerOneComponent', () => {
  let component: VzCountTimerOneComponent;
  let fixture: ComponentFixture<VzCountTimerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountTimerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountTimerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
