import { TestBed } from '@angular/core/testing';

import { MockedGoalsService } from './mocked-goals.service';

describe('MockedGoalsService', () => {
  let service: MockedGoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockedGoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
