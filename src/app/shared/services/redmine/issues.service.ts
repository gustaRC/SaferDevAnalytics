import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class IssuesService extends BaseService {

  constructor(
    protected override injector: Injector
  ) {
    super(
      'issues',
      injector
    )
  }

}
