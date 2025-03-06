export class FilterIssues {
  updated_on?: string;
  created_on?: string = '>=2023-01-01';
  assigned_to_id?: number[];
  status_id?: number[];
  //implementar o project_id
  //implementar o tracker_id
  //implementar o priority_id
  //implementar o author_id
  limit?: number = 100;
  offset?: number = 0;
}
