import { BaseModel } from "../base.model";
import { IssuesQuantitative } from "./issues-quantitative.model";
import { UserQuantitativeIssues } from "./user-quantitative.model";

export class SectorQuantitative {
  sector!: BaseModel;
  users!: UserQuantitativeIssues[];
  total_qty_sector_issues!: IssuesQuantitative;
}
