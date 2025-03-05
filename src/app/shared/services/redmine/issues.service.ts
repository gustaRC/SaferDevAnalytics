import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base.service';
import { expand, map, Observable, reduce } from 'rxjs';
import { FilterIssues } from '../../models/issues/filter-issues.model';
import { IssueResponse } from '../../models/issues/issue-response.model';
import { Issue } from '../../models/issues/issue.model';

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

  searchIssues(filter: FilterIssues): Observable<IssueResponse> {
    return this.http.get<IssueResponse>(`${this.baseUrl}.json?${this.buildRedmineFilterUrl(filter)}`);
  }

  getAllIssues(filter: FilterIssues): Observable<Issue[]> {
    const limit = 100;
    const offset = 0;
    const filters = { ...filter, limit, offset };

    return this.searchIssues(filters)
    .pipe(
      expand((response: IssueResponse) => {
          filters.offset += limit;
          return filters.offset < response.total_count ? this.searchIssues(filters) : [];
        }
      ),
      map((response: IssueResponse) => response.issues),
      reduce((acc: Issue[], issues: Issue[]) => acc.concat(issues), [])
    );

  }

}
