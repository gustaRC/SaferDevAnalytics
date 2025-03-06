import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { FilterIssues } from '../models/issues/filter-issues.model';
import { BaseModel } from '../models/base.model';

export abstract class BaseService {

  protected baseUrl: string;
  protected http: HttpClient;

  protected idsResource: number[] = [];

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
      if(!value || value.length === 0) {
        continue;
      }

      if (Array.isArray(value)) {
        params.append(key, value.join('|'));
      } else {
        params.append(key, String(value));
      }
    }

    return params.toString();
  }

  protected setIdsResources<T extends BaseModel>(resources: T[] | undefined): void {
    if(resources === undefined) {
      return;
    }

    this.idsResource = [];
    this.idsResource = resources.map(resource => resource.id);
  }

}

