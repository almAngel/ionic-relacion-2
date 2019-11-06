import { TestBed } from '@angular/core/testing';

import { ProductloaderService } from './productloader.service';

describe('ProductloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductloaderService = TestBed.get(ProductloaderService);
    expect(service).toBeTruthy();
  });
});
