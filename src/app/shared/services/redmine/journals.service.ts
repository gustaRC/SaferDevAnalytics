import { GroupsService } from './groups.service';
import { IssuesService } from './issues.service';
import { Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { FilterIssues } from '../../models/issues/filter-issues.model';
import { map, Observable } from 'rxjs';
import { IssueJournal } from '../../models/issues/journal/issue-journal.model';
import { IssuesQuantitative } from '../../models/quantitative/issues-quantitative.model';
import { GroupsQuantitative } from '../../models/quantitative/groups-quantitative.model';
import { QuantifyIssuesMethods } from '../../util/quantify-issues.methods';
import { GroupUsers } from '../../models/group-user/group-users.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  readonly issuesWithJournals = signal<IssueJournal[]>([]);

  readonly generalQuantitative = signal<IssuesQuantitative>(new IssuesQuantitative());

  readonly groupsQuantitative = signal<GroupsQuantitative[]>([]);

  private quantifyMethods = new QuantifyIssuesMethods();

  constructor(
    protected override injector: Injector,
    private issuesService: IssuesService,
    private groupsService: GroupsService
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

      //adicionar retorno
    } else {
      console.log('Requisição Issues com Journals concluída, mas não há resultados!');
    }

  }

  getIssueWithJournalsById(id: number): Observable<IssueJournal> {
    return this.http.get<{issue: IssueJournal}>(this.getUrlById(id))
    .pipe(
      map((response: {issue: IssueJournal}) => response.issue)
    );
  }

  bootGroupsQuantitative() {
    const groups = this.groupsService.groupsWithUsers();

    groups.forEach((group: GroupUsers) => {
      if(this.groupsQuantitative().find((groupQty) => groupQty.group.id === group.id)) {
        return;
      }

      const groupQty = new GroupsQuantitative();

      groupQty.group = group;
      groupQty.users = group.users.map((user) => {
        return {
          user: user,
          quantitatives: new IssuesQuantitative()
        }
      })

      this.groupsQuantitative.update((currentGroups: GroupsQuantitative[]) => [...currentGroups, groupQty]);
    })
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
