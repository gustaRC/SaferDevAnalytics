import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserAuth } from '../../shared/models/group-user/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {
  private readonly USER_KEY = 'auth_token';

  constructor(
    private cookieService: CookieService
  ) { }

  setUser(user: UserAuth): void {
    this.cookieService.set(this.USER_KEY, JSON.stringify(user), {
      expires: 1,
      sameSite: 'Strict',
      path: '/',
    });
  }

  getUser(): UserAuth | undefined {
    const userCookie = this.cookieService.get(this.USER_KEY);
    if(userCookie) {
      return UserAuth.fromJson(JSON.parse(userCookie));
    }
    return undefined;
  }

  deleteUser(): void {
    this.cookieService.delete(this.USER_KEY, '/');
  }

}
