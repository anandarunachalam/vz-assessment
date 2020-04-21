import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzFloatingBannerComponent } from './vz-floating-banner.component';

describe('VzFloatingBannerComponent', () => {
  let component: VzFloatingBannerComponent;
  let fixture: ComponentFixture<VzFloatingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzFloatingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzFloatingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
