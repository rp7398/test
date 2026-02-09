import { TestBed } from '@angular/core/testing';

import { AboutApiService } from './api';

describe('AboutApiService', () => {
  let service: AboutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });
});
