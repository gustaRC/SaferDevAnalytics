import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { FilterIssues } from '../models/filter-issues.model';

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

  protected buildRedmineFilterUrl(filters: FilterIssues): string {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      if (Array.isArray(value)) {
        params.append(key, value.join('|'));
      } else {
        params.append(key, String(value));
      }
    }

    return params.toString();
  }

}

