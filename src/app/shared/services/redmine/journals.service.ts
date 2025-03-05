import { IssuesService } from './issues.service';
import { computed, Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { FilterIssues } from '../../models/issues/filter-issues.model';
import { map, Observable } from 'rxjs';
import { IssueJournal } from '../../models/issues/journal/issue-journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  private idsIssues: number[] = [];

  private issuesWithJournals = signal<IssueJournal[]>([]); //implementar tipagem antes de manipular

  processedIssues = computed(() => {
    console.log('processedIssues: ', this.issuesWithJournals());

    //IMPLEMENTAR MANIPULAÇÃO

    return this.issuesWithJournals();
  });

  constructor(
    protected override injector: Injector,
    private issuesService: IssuesService
  ) {
    super(
      'issues/',
      injector
    );
  }

  async getIssueWithJournals(filters: FilterIssues) {
    this.issuesWithJournals.set([]);

    await this.getIssues(filters);

    if(this.idsIssues.length > 0) {
      this.idsIssues.forEach((id) => {
        this.getIssueWithJournalsById(id)
        .subscribe({
          next: (responseIssue) => {
            console.log('responseIssue: ', responseIssue);
            this.issuesWithJournals.update((currentIssues: any) => [...currentIssues, responseIssue]);
          }
        });

      })
    } else {
      console.log('this.idIssues.length === 0');
    }

  }

  getIssueWithJournalsById(id: number): Observable<{issue: IssueJournal}> {
    return this.http.get<{issue: IssueJournal}>(this.getUrlById(id));
    //CONVERTER PARA O MODELO DE ISSUEJOURNAL, atualmente está {issue: IssueJournal}
  }


  //PRIVATE METHODS

  private getUrlById(id: number): string {
    return `${this.baseUrl}${id}.json?include=journals`;
  }

  private async getIssues(filters: FilterIssues): Promise<void> {
    await this.issuesService.getAllIssues(filters).toPromise().then(
      (responseIssue: any) => {
        this.setIdsIssues(responseIssue);
      }
    );
  }

  private setIdsIssues(issues: any[]): void {
    this.idsIssues = [];
    this.idsIssues = issues.map(issue => issue.id);
  }

}
