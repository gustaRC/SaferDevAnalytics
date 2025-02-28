import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends BaseService {

  constructor(
    protected override injector: Injector
  ) {
    super(
      'groups',
      injector
    )
  }

}
