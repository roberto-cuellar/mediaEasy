import { TestBed } from '@angular/core/testing';

import { TranslatePageService } from './translate-page.service';

describe('TranslatePageService', () => {
  let service: TranslatePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
