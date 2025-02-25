export class User {
  id!: number;
  login!: string;
  admin!: boolean;
  firstname!: string;
  lastname!: string;
  created_on!: string;
  updated_on!: string;
  last_login_on!: string;
  passwd_changed_on!: string;
  twofa_scheme!: any;
  api_key!: string;

  static fromJson(json: Partial<User>): User {
    const user = new User();
    Object.assign(user, json);
    return user;
  }

}
