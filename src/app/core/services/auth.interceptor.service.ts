import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCookieService } from './auth-cookie.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authCookieService: AuthCookieService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userKey = this.authCookieService.getUser();

    if(userKey?.api_key) {
      const clonedRequestAuth = req.clone({
        setHeaders: { 'X-Redmine-API-Key': userKey.api_key },
        withCredentials: true
      });

      return next.handle(clonedRequestAuth);
    }

    const clonedRequest = req.clone({
      withCredentials: true,
    });

    return next.handle(clonedRequest);
  }

}
