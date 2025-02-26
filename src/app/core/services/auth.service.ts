import { AuthCookieService } from './auth-cookie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth: string = "redmine/users/current.json";

  constructor(
    private http: HttpClient,
    private authCookieService: AuthCookieService
  ) { }

  login(username: string, password: string): Observable<User> {
    const authAuthorization = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authAuthorization,
      'Content-Type': 'application/json'
    })

    return this.http.get<User>(
      `${this.apiUrlAuth}`, { headers }
    )
    .pipe(
      map((response: any) => response.user),
      tap(response => {
        const user = User.fromJson(response);

        this.authCookieService.setUser(user);
      })
    );

  }

  deslogar() {
    if(this.authCookieService.getUser()) {
      this.authCookieService.deleteUser();
      //router.navigate(['/login])
    }

  }

}
