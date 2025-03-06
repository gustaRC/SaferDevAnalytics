import { CustomField } from "./custom-field.model";
import { BaseModel } from "../base.model";

export class Issue {
  id!: number;
  project!: BaseModel;
  tracker!: BaseModel;
  status!: BaseModel;
  priority!: BaseModel;
  author!: BaseModel;
  assigned_to!: BaseModel;
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
