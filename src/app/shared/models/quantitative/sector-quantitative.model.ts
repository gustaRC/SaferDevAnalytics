import { DefaultModel } from "../default.model";
import { IssuesQuantitative } from "./issues-quantitative.model";
import { UserQuantitativeIssues } from "./user-quantitative.model";

export class SectorQuantitative {
  sector!: DefaultModel;
  users!: UserQuantitativeIssues[];
  total_qty_sector_issues!: IssuesQuantitative;
}
