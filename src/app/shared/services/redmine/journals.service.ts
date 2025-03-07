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

  async searchIssueWithJournals(filters: FilterIssues) {
    this.issuesWithJournals.set([]);

    this.getIssues(filters).then(async () => {
      if(this.idsResource.length > 0) {
        for (const id of this.idsResource) {
          const responseIssue = await this.getIssueWithJournalsById(id).toPromise();

          if (responseIssue) {
            this.issuesWithJournals.update((currentIssues: IssueJournal[]) => [...currentIssues, responseIssue]);
            this.quantifyIssues(responseIssue);
          }
        }
        //implementar lógica de alimentar o loading de acordo com as requisições
        this.setRequestStatus(true);
      } else {
        this.setRequestStatus(false);
      }

    });

  }

  getIssueWithJournalsById(id: number): Observable<IssueJournal> {
    return this.http.get<{issue: IssueJournal}>(this.getJournalsUrlById(id))
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

  private getJournalsUrlById(id: number): string {
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
