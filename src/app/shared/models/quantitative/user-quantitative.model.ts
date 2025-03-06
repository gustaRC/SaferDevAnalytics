import { BaseModel } from "../base.model";
import { IssuesQuantitative } from "./issues-quantitative.model";

export class UserQuantitativeIssues {
  user!: BaseModel;
  quantitatives!: IssuesQuantitative;
}
