
export class Ticket {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: any[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.firstName = data.firstname;
      this.lastName = data.lastname;
      this.email = data.email;
    }
  }
}


