import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzsCountDownTotalComponent } from './vzs-count-down-total.component';

describe('VzsCountDownTotalComponent', () => {
  let component: VzsCountDownTotalComponent;
  let fixture: ComponentFixture<VzsCountDownTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzsCountDownTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzsCountDownTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
