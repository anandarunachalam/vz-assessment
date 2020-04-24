import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzsCountDownBlockComponent } from './vzs-count-down-block.component';

describe('VzsCountDownBlockComponent', () => {
  let component: VzsCountDownBlockComponent;
  let fixture: ComponentFixture<VzsCountDownBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzsCountDownBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzsCountDownBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
