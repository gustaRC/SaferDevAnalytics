import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

export abstract class BaseService {

  protected baseUrl: string;
  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
  ) {
    this.baseUrl = `redmine/${apiPath}`;
    this.http = this.injector.get(HttpClient);
  }
}

