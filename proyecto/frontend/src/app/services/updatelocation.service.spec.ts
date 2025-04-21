import { TestBed } from '@angular/core/testing';

import { UpdatelocationService } from './updatelocation.service';

describe('UpdatelocationService', () => {
  let service: UpdatelocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatelocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
