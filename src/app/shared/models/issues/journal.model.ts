import { DefaultModel } from "../default.model";
import { JournalDetail } from "./journal-detail.model";

export class Journal {
  id!: number;
  user!: DefaultModel;
  notes!: string | null;
  created_on!: string;
  private_notes!: boolean;
  details!: JournalDetail[];
}
