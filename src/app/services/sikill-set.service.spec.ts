import { TestBed } from '@angular/core/testing';

import { SikillSetService } from './sikill-set.service';

describe('SikillSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SikillSetService = TestBed.get(SikillSetService);
    expect(service).toBeTruthy();
  });
});
