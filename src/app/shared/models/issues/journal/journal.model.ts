import { BaseModel } from "../../base.model";
import { JournalDetail } from "./journal-detail.model";

export class Journal {
  id!: number;
  user!: BaseModel;
  notes!: string | null;
  created_on!: string;
  private_notes!: boolean;
  details!: JournalDetail[];
}
