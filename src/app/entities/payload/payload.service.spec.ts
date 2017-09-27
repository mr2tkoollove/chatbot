import { TestBed, inject } from '@angular/core/testing';

import { PayloadService } from './payload.service';

describe('PayloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayloadService]
    });
  });

  it('should be created', inject([PayloadService], (service: PayloadService) => {
    expect(service).toBeTruthy();
  }));
});
