import { TestBed } from '@angular/core/testing';

import { SaveContactService } from './save-contact.service';

describe('SaveContactService', () => {
  let service: SaveContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
