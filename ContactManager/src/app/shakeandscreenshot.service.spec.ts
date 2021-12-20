import { TestBed } from '@angular/core/testing';

import { ShakeandscreenshotService } from './shakeandscreenshot.service';

describe('ShakeandscreenshotService', () => {
  let service: ShakeandscreenshotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShakeandscreenshotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
