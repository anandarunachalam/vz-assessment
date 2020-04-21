import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzDynamicTableComponent } from './vz-dynamic-table.component';

describe('VzDynamicTableComponent', () => {
  let component: VzDynamicTableComponent;
  let fixture: ComponentFixture<VzDynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzDynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
