import { TestBed } from '@angular/core/testing';

import { DeletelocationService } from './deletelocation.service';

describe('DeletelocationService', () => {
  let service: DeletelocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletelocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
