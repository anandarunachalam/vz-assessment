import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountDownFormComponent } from './vz-count-down-form.component';

describe('VzCountDownFormComponent', () => {
  let component: VzCountDownFormComponent;
  let fixture: ComponentFixture<VzCountDownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountDownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountDownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
