import { TestBed } from '@angular/core/testing';

import { BigscreenService } from './bigscreen.service';

describe('BigscreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
	const service: BigscreenService = TestBed.get(BigscreenService);
	expect(service).toBeTruthy();
  });
});
