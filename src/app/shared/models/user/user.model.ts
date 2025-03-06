export class User {
  readonly id!: number;
  readonly login!: string;
  readonly admin!: boolean;
  readonly firstname!: string;
  readonly lastname!: string;
  readonly created_on!: string;
  readonly updated_on!: string;
  readonly last_login_on!: string;
  readonly passwd_changed_on!: string;
  readonly twofa_scheme!: any;
  readonly api_key!: string;

  static fromJson(json: Partial<User>): User {
    const user = new User();
    Object.assign(user, json);
    return user;
  }

}
