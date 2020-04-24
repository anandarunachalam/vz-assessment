import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzsCountDownStatusComponent } from './vzs-count-down-status.component';

describe('VzsCountDownStatusComponent', () => {
  let component: VzsCountDownStatusComponent;
  let fixture: ComponentFixture<VzsCountDownStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzsCountDownStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzsCountDownStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
