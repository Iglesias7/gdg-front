
export class User {
  id!: number;
  username!: string;
  firstname!: string;
  email!: string;
  password!: string;
  company!: string;
  companyPosition!: string;
  twitter!: string;
  linkedln!: string;
  github!: string;
  token!: string;
  role!: boolean;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.username = data.username;
      this.firstname = data.firstname;
      this.email = data.email;
      this.password = data.password;
      this.token = data.token;
      this.role = data.role;
      this.company = data.company;
      this.companyPosition = data.companyPosition;
      this.twitter = data.twitter;
      this.linkedln = data.linkedln;
      this.github = data.github;
    }
  }
}


