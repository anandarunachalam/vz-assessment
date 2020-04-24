import { TestBed } from '@angular/core/testing';

import { VzCountTwoService } from './vz-count-two.service';

describe('VzCountTwoService', () => {
  let service: VzCountTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VzCountTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
