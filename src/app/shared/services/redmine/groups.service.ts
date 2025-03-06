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
    await this.getGroups()
  }

  searchGroups(): Observable<BaseModel[]> {
    return this.http.get<{groups: BaseModel[]}>(`${this.baseUrl}.json`)
    .pipe(
      map((response: {groups: BaseModel[]}) => response.groups)
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
