import { TestBed } from '@angular/core/testing';

import { TocgeocatalogService } from './tocgeocatalog.service';

describe('TocgeocatalogService', () => {
  let service: TocgeocatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TocgeocatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
