import { GroupsService } from './groups.service';
import { IssuesService } from './issues.service';
import { Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { FilterIssues } from '../../models/issues/filter-issues.model';
import { map, Observable } from 'rxjs';
import { IssueJournal } from '../../models/issues/journal/issue-journal.model';
import { IssuesQuantitative } from '../../models/issues/quantitative/issues-quantitative.model';
import { GroupsQuantitative } from '../../models/issues/quantitative/groups-quantitative.model';
import { QuantifyIssuesUtilMethods } from '../../util/functions/quantify-issues.methods';
import { GroupUsers } from '../../models/group-user/group-users.model';

@Injectable({
  providedIn: 'root'
})
export class JournalsService extends BaseService {

  readonly issuesWithJournals = signal<IssueJournal[]>([]);
  readonly generalQuantitative = signal<IssuesQuantitative>(new IssuesQuantitative());
  readonly groupsQuantitative = signal<GroupsQuantitative[]>([]);

  constructor(
    protected override injector: Injector,
    private issuesService: IssuesService,
    private groupsService: GroupsService,
    private quantifyUtilMethods: QuantifyIssuesUtilMethods
  ) {
    super(
      'issues',
      injector
    );
  }

  async searchIssueWithJournals(filters: FilterIssues) {
    this.getIssues(filters).then(async () => {
      if(this.idsResource.length > 0) {
        this.issuesWithJournals.set([]);
        this.rebootGroupsIssuesQuantitative();

        for (const id of this.idsResource) {
          const responseIssue = await this.getIssueWithJournalsById(id).toPromise();

          if (responseIssue) {
            this.issuesWithJournals.update((currentIssues: IssueJournal[]) => [...currentIssues, responseIssue]);
            this.storeGroupUserIssues(responseIssue);
          }
        }

        this.quantifyIssuesFromGroups();
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
          issues: [],
          quantitatives: new IssuesQuantitative()
        }
      })

      this.groupsQuantitative.update((currentGroups: GroupsQuantitative[]) => [...currentGroups, groupQty]);
    })
  }

  rebootGroupsIssuesQuantitative() {
    this.groupsQuantitative().forEach(group => {
      group.total_qty_sector_issues = new IssuesQuantitative();
      group.users.forEach(user => {
        user.quantitatives = new IssuesQuantitative();
        user.issues = [];
      })
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

  private storeGroupUserIssues(issue: IssueJournal) {
    if (this.groupsQuantitative().length === 0) {
      this.bootGroupsQuantitative();
    }

    this.groupsQuantitative().forEach(group => {
      group.users.forEach(user => {
        if(user.user.id === issue.assigned_to.id) {
          user.issues.push(issue);
        }

      })
    })
  }

  private quantifyIssuesFromGroups() {
    this.groupsQuantitative().forEach(group => {
      console.log('Grupo: ', group.group.name)
      group.users.forEach(user => {
        user.issues.forEach(issueUser => {
          issueUser.journals.forEach(journal => {
            journal.details.forEach(journalDetail => {

              this.quantifyUtilMethods.updateUserFromChanges(journalDetail, user.quantitatives);

            })
          })

          console.log('User Quantitatives pos manipulação: ', user.user.name, user.quantitatives)
        })
        //quantificar grupo
      })
    })

  }

}
