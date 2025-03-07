import { BaseModel } from "../../base.model";
import { IssuesQuantitative } from "./issues-quantitative.model";
import { UserIssues } from "../user-issues.model";

export class GroupsQuantitative {
  group!: BaseModel;
  users!: UserIssues[];
  total_qty_sector_issues: IssuesQuantitative = new IssuesQuantitative();
}
