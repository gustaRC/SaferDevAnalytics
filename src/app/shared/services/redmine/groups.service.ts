import { Injectable, Injector, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { GroupUsers } from '../../models/group-user/group-users.model';
import { BaseModel } from '../../models/base.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends BaseService {

  readonly groupsWithUsers = signal<GroupUsers[]>([]);

  constructor(
    protected override injector: Injector
  ) {
    super(
      'groups',
      injector
    )
  }

  async searchGroupsWithUsers() {
    this.groupsWithUsers.set([]);

    await this.setGroupsId().then(() => {
      if (this.idsResource.length > 0) {

        this.idsResource.forEach(async (id) => {
          await this.getGroupWithUsersById(id)
          .toPromise().then((responseGroup: any) => {
              this.groupsWithUsers.update((currentGroups: GroupUsers[]) => [...currentGroups, responseGroup]);
          });
        })

        this.setRequestStatus(true);
      } else {
        this.setRequestStatus(false);
      }
    });
  }

  searchGroups(): Observable<BaseModel[]> {
    return this.http.get<{groups: BaseModel[]}>(`${this.baseUrl}.json`)
    .pipe(
      map((response: {groups: BaseModel[]}) => response.groups)
    );
  }

  getGroupWithUsersById(id: number): Observable<GroupUsers> {
    return this.http.get<{group: GroupUsers}>(`${this.baseUrl}/${id}.json?include=users`)
    .pipe(
      map((response: {group: GroupUsers}) => response.group)
    );
  }

  async getGroupsWithUsers(): Promise<GroupUsers[]> {
    if(this.groupsWithUsers().length == 0) {
      await this.searchGroupsWithUsers();

      this.requestStatus$.subscribe({
        next: () => {
          return this.groupsWithUsers();
        },
      })
    }

    return this.groupsWithUsers();
  }


  //PRIVATE METHODS

  private async setGroupsId(): Promise<void> {
    await this.searchGroups()
    .toPromise().then(
      (responseGroups: any) => {
        this.setIdsResources(responseGroups);
      }
    );
  }

}
