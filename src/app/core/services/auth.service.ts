import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth: string = "redmine/users/current.json";

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
    const authAuthorization = 'Basic ' + btoa(`${username}:${password}`)

    const headers = new HttpHeaders({
      'Authorization': authAuthorization,
      'Content-Type': 'application/json',
    })

    return this.http.get(`${this.apiUrlAuth}`, { headers },);
  }

}
