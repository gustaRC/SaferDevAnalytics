import { DefaultModel } from "../default.model";
import { QuantitativeIssues } from "../issues/quantitative-issues.model";

export class UserQuantitativeIssues {
  user!: DefaultModel;
  quantitatives!: QuantitativeIssues;
}
