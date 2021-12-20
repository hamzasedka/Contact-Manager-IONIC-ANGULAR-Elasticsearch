import { TestBed } from '@angular/core/testing';

import { CallAndSendService } from './call-and-send.service';

describe('CallAndSendService', () => {
  let service: CallAndSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallAndSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
