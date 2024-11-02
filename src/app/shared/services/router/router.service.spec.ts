import { TestBed } from '@angular/core/testing';
import { RouterService } from './routrer.service';

describe('RoutrerService', () => {
  let service: RouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
