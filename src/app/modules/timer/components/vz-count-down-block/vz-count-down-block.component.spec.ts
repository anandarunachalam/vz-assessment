import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzCountDownBlockComponent } from './vz-count-down-block.component';

describe('VzCountDownBlockComponent', () => {
  let component: VzCountDownBlockComponent;
  let fixture: ComponentFixture<VzCountDownBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzCountDownBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzCountDownBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
