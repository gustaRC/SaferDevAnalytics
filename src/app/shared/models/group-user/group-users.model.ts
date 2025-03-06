import { BaseModel } from "../base.model";

export class GroupUsers extends BaseModel {
  users!: BaseModel[];
}
