import { TestBed } from '@angular/core/testing';

import { FevIconService } from './fev-icon.service';

describe('FevIconService', () => {
  let service: FevIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FevIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
