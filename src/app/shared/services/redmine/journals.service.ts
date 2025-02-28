import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  constructor(
    protected override injector: Injector
  ) {
    super(
      'journals',
      injector
    );
  }

}
