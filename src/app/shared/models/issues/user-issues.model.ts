import { BaseModel } from "../base.model";
import { Issue } from "./issue.model";
import { IssueJournal } from "./journal/issue-journal.model";
import { IssuesQuantitative } from "./quantitative/issues-quantitative.model";

export class UserIssues {
  user!: BaseModel;
  issues!: Issue[] | IssueJournal[];
  quantitatives!: IssuesQuantitative;
}
