import { TestBed } from '@angular/core/testing';
import { Servicespictures } from './servicespictures';

describe('Servicespictures', () => {
  let service: Servicespictures;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicespictures);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
