import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {
  private readonly USER_KEY = 'auth_token';

  constructor(
    private cookieService: CookieService
  ) { }

  setUser(user: User): void {
    this.cookieService.set(this.USER_KEY, JSON.stringify(user), {
      expires: 1,
      sameSite: 'Strict',
      path: '/',
    });
  }

  getUser(): User | undefined {
    const userCookie = this.cookieService.get(this.USER_KEY);
    if(userCookie) {
      return User.fromJson(JSON.parse(userCookie));
    }
    return undefined;
  }

  deleteUser(): void {
    this.cookieService.delete(this.USER_KEY, '/');
  }

}
