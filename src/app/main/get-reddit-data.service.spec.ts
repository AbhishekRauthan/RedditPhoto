import { TestBed } from '@angular/core/testing';

import { GetRedditDataService } from './get-reddit-data.service';

describe('GetRedditDataService', () => {
  let service: GetRedditDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRedditDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
