import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthCookieService } from '../services/auth-cookie.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authCookieService = inject(AuthCookieService);
  // const router = inject(Router);

  if(authCookieService.getUser() !== undefined && state.url !== 'login') {
    return true;
  }

  //adicionar rota login
  //router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //se não estiver autenticado vai pra login, mas depois retornara para a url atual
  return false;
};
