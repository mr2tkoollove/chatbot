import { TestBed, inject } from '@angular/core/testing';

import { ViewDetailProductService } from './view-detail-product.service';

describe('ViewDetailProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewDetailProductService]
    });
  });

  it('should be created', inject([ViewDetailProductService], (service: ViewDetailProductService) => {
    expect(service).toBeTruthy();
  }));
});
