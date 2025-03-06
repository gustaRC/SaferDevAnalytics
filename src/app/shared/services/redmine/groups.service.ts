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

  async getGroupsWithUsers() {
    this.groupsWithUsers.set([]);

    await this.getGroups();

    if(this.idsResource.length > 0) {
      this.idsResource.forEach((id) => {
        this.getGroupWithUsersById(id)
        .subscribe({
          next: (responseGroup: GroupUsers) => {
            this.groupsWithUsers.update((currentGroups: GroupUsers[]) => [...currentGroups, responseGroup]);
            console.log('groupwithusers', this.groupsWithUsers());
          }
        });

      })
    } else {
      console.log('Requisição Grupos concluída, mas não há grupos!');
    }

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

  //PRIVATE METHODS

  private async getGroups(): Promise<void> {
    await this.searchGroups()
    .toPromise().then(
      (responseGroups: any) => {
        this.setIdsResources(responseGroups);
      }
    );
  }


}
