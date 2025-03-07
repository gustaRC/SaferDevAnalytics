import { BaseModel } from "../base.model";
import { IssueJournal } from "./journal/issue-journal.model";
import { IssuesQuantitative } from "./quantitative/issues-quantitative.model";

export class UserIssues {
  user!: BaseModel;
  issues!: IssueJournal[];
  quantitatives!: IssuesQuantitative;
}
