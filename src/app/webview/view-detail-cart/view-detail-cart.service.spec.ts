import { TestBed, inject } from '@angular/core/testing';

import { ViewDetailCartService } from './view-detail-cart.service';

describe('ViewDetailCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewDetailCartService]
    });
  });

  it('should be created', inject([ViewDetailCartService], (service: ViewDetailCartService) => {
    expect(service).toBeTruthy();
  }));
});
