import { TestBed, inject } from '@angular/core/testing';

import { DiehardService } from './diehard.service';

describe('DiehardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiehardService]
    });
  });

  it('should be created', inject([DiehardService], (service: DiehardService) => {
    expect(service).toBeTruthy();
  }));
});
