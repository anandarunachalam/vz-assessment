import { TestBed } from '@angular/core/testing';

import { VzCountOneService } from './vz-count-one.service';

describe('VzCountOneService', () => {
  let service: VzCountOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VzCountOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
