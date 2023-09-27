import { TestBed } from '@angular/core/testing';

import { SessionsHttpService } from './sessions-http.service';

describe('SessionsHttpService', () => {
  let service: SessionsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
