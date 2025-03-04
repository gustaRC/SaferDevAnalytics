import { IssuesService } from './issues.service';
import { computed, Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { FilterIssues } from '../../models/filter-issues.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  private idsIssues: number[] = [];

  private issuesWithJournals = signal<any[]>([]);

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
        this.getIssueWithJournalsById(id).subscribe({
          next: (responseIssue) => {
            this.issuesWithJournals.update((currentIssues) => [...currentIssues, responseIssue]);
          }
        });

      })
    } else {
      console.log('this.idIssues.length === 0');
    }

  }

  getIssueWithJournalsById(id: number): Observable<any> {
    return this.http.get<any>(this.getUrlById(id));
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
