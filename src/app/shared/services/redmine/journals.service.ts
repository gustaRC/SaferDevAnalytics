import { IssuesService } from './issues.service';
import { Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { FilterIssues } from '../../models/issues/filter-issues.model';
import { map, Observable } from 'rxjs';
import { IssueJournal } from '../../models/issues/journal/issue-journal.model';
import { IssuesQuantitative } from '../../models/quantitative/issues-quantitative.model';
import { SectorQuantitative } from '../../models/quantitative/sector-quantitative.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  readonly issuesWithJournals = signal<IssueJournal[]>([]);

  readonly generalQuantitative = signal<IssuesQuantitative>(new IssuesQuantitative());

  readonly sectorQuantitative = signal<SectorQuantitative[]>([]);

  constructor(
    protected override injector: Injector,
    private issuesService: IssuesService
  ) {
    super(
      'issues',
      injector
    );
  }

  async getIssueWithJournals(filters: FilterIssues) {
    this.issuesWithJournals.set([]);

    await this.getIssues(filters);

    if(this.idsResource.length > 0) {
      this.idsResource.forEach((id) => {
        this.getIssueWithJournalsById(id)
        .subscribe({
          next: (responseIssue: IssueJournal) => {
            this.issuesWithJournals.update((currentIssues: IssueJournal[]) => [...currentIssues, responseIssue]);

            this.quantifyIssues(responseIssue);
          }
        });

      })
    } else {
      console.log('this.idIssues.length === 0');
    }

  }

  getIssueWithJournalsById(id: number): Observable<IssueJournal> {
    return this.http.get<{issue: IssueJournal}>(this.getUrlById(id))
    .pipe(
      map((response: {issue: IssueJournal}) => response.issue)
    );
  }

  //PRIVATE METHODS

  private getUrlById(id: number): string {
    return `${this.baseUrl}/${id}.json?include=journals`;
  }

  private async getIssues(filters: FilterIssues): Promise<void> {
    await this.issuesService.getAllIssues(filters).toPromise().then(
      (responseIssue: any) => {
        this.setIdsResources(responseIssue);
      }
    );
  }

  private quantifyIssues(history: IssueJournal) {
    console.log('issue history :', history)
  }

}
