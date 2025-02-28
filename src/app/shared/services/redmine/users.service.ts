import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  constructor(
    protected override injector: Injector
  ) {
    super(
      'users',
      injector
    )
  }
}
