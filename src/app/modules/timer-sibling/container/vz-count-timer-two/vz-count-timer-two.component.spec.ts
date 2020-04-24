import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountTimerTwoComponent } from './vz-count-timer-two.component';

describe('VzCountTimerTwoComponent', () => {
  let component: VzCountTimerTwoComponent;
  let fixture: ComponentFixture<VzCountTimerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountTimerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountTimerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
