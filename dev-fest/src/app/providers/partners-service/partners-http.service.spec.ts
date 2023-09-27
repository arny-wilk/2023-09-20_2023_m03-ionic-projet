import { TestBed } from '@angular/core/testing';

import { PartnersHttpService } from './partners-http.service';

describe('PartnersHttpService', () => {
  let service: PartnersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
