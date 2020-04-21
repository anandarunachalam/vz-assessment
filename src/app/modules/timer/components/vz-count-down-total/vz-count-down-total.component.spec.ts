import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountDownTotalComponent } from './vz-count-down-total.component';

describe('VzCountDownTotalComponent', () => {
  let component: VzCountDownTotalComponent;
  let fixture: ComponentFixture<VzCountDownTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountDownTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountDownTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
