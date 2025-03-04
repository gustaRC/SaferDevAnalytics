export class FilterIssues {
  updated_on?: string;
  created_on?: string = '>=2023-01-01';
  assigned_to_id?: number[];
  status_id?: number[];
  limit?: number = 100;
  offset?: number = 0;
}
