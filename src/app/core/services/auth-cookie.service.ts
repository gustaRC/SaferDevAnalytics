import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(
    private cookieService: CookieService
  ) { }

  setToken(token: string): void {
    this.cookieService.set(this.TOKEN_KEY, token, {
      expires: 1,
      secure: window.location.protocol === 'https:',
      sameSite: 'Strict',
      path: '/',
    });
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  deleteToken(): void {
    this.cookieService.delete(this.TOKEN_KEY, '/');
  }

}
