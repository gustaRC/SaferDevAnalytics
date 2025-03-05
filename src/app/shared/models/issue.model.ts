import { CustomField } from "./custom-field.model";
import { DefaultModel } from "./default.model";

export class Issue {
  id!: number;
  project!: DefaultModel;
  tracker!: DefaultModel;
  status!: DefaultModel;
  priority!: DefaultModel;
  author!: DefaultModel;
  assigned_to!: DefaultModel;
  subject!: string;
  description!: string;
  start_date!: string;
  due_date!: string;
  done_ratio!: number;
  is_private!: boolean;
  estimated_hours!: number | null;
  custom_fields!: CustomField[];
  created_on!: string;
  updated_on!: string;
  closed_on!: string | null;
}
