import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';
import { expand, map, Observable, reduce } from 'rxjs';
import { FilterIssues } from '../../models/filter-issues.model';

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

  searchIssues(filter: FilterIssues): Observable<any> {
    return this.http.get(`${this.baseUrl}.json?${this.buildRedmineFilterUrl(filter)}`);
  }

  getAllIssues(filter: FilterIssues): Observable<any[]> {
    const limit = 100;
    const offset = 0;
    const filters = { ...filter, limit, offset };

    return this.searchIssues(filters)
    .pipe(
      expand((response: any) => {
          filters.offset += limit;
          return filters.offset < response.total_count ? this.searchIssues(filters) : [];
        }
      ),
      map((response: any) => response.issues),
      reduce((acc, issues) => acc.concat(issues), [])
    );

  }

}
