import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzsCountDownFormComponent } from './vzs-count-down-form.component';

describe('VzsCountDownFormComponent', () => {
  let component: VzsCountDownFormComponent;
  let fixture: ComponentFixture<VzsCountDownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzsCountDownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzsCountDownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
