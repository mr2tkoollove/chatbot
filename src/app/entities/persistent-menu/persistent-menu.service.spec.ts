import { TestBed, inject } from '@angular/core/testing';

import { PersistentMenuService } from './persistent-menu.service';

describe('PersistentMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistentMenuService]
    });
  });

  it('should be created', inject([PersistentMenuService], (service: PersistentMenuService) => {
    expect(service).toBeTruthy();
  }));
});
