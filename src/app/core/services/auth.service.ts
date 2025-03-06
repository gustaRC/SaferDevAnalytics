import { AuthCookieService } from './auth-cookie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserAuth } from '../../shared/models/group-user/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth: string = "redmine/users/current.json";

  constructor(
    private http: HttpClient,
    private authCookieService: AuthCookieService
  ) { }

  login(username: string, password: string): Observable<UserAuth> {
    const authAuthorization = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authAuthorization,
      'Content-Type': 'application/json'
    })

    return this.http.get<{user: UserAuth}>(
      `${this.apiUrlAuth}`, { headers }
    )
    .pipe(
      map((response: {user: UserAuth}) => response.user),
      tap(response => {
        const user = UserAuth.fromJson(response);

        this.authCookieService.setUser(user);
      })
    );

  }

  logout() {
    if(this.authCookieService.getUser()) {
      this.authCookieService.deleteUser();
      //router.navigate(['/login])
    }

  }

}
