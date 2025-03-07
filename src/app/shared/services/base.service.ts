import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { BaseModel } from '../models/base.model';
import { Subject } from 'rxjs';

export abstract class BaseService {

  protected baseUrl: string;
  protected http: HttpClient;

  private requestStatusSubject = new Subject<boolean>();
  requestStatus$ = this.requestStatusSubject.asObservable();

  protected idsResource: number[] = [];

  constructor(
    protected apiPath: string,
    protected injector: Injector,
  ) {
    this.baseUrl = `redmine/${apiPath}`;
    this.http = this.injector.get(HttpClient);
  }

  protected setRequestStatus(status: boolean): void {
    this.requestStatusSubject.next(status);
  }

  protected setIdsResources<T extends BaseModel>(resources: T[] | undefined): void {
    if(resources === undefined) {
      return;
    }

    this.idsResource = [];
    this.idsResource = resources.map(resource => resource.id);
  }

}

