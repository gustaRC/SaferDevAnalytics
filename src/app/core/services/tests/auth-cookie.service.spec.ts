import { TestBed } from '@angular/core/testing';

import { AuthCookieService } from '../auth-cookie.service';

describe('AuthCookieServiceService', () => {
  let service: AuthCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
