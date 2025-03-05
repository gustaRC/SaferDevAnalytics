import { Issue } from "../issue.model";
import { Journal } from "./journal.model";

export class IssueJournal extends Issue{
  total_estimated_hours!: number | null;
  spent_hours!: number;
  total_spent_hours!: number;
  journals!: Journal[];
}
