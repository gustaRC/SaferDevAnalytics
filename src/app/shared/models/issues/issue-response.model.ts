import { Issue } from "./issue.model";

export class IssueResponse {
  issues!: Issue[];
  total_count!: number;
  offset!: number;
  limit!: number;
}
