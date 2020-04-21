import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountDownStatusComponent } from './vz-count-down-status.component';

describe('VzCountDownStatusComponent', () => {
  let component: VzCountDownStatusComponent;
  let fixture: ComponentFixture<VzCountDownStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountDownStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountDownStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
