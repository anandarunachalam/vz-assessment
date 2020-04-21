import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzProductListComponent } from './vz-product-list.component';

describe('VzProductListComponent', () => {
  let component: VzProductListComponent;
  let fixture: ComponentFixture<VzProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
