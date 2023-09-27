import { TestBed } from '@angular/core/testing';

import { SpeakersHttpService } from './speakers-http.service';

describe('SpeakersHttpService', () => {
  let service: SpeakersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
