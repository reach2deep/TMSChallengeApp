// USER DATA MODEL
export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;

  constructor() {}

  setId(id: string) {
    this.id = id;
  }
  getId(): string {
    return this.id;
  }

  setUsername(username: string) {
    this.username = username;
  }
  getUsername(): string {
    return this.username;
  }

  setPassword(password: string) {
    this.password = password;
  }
  getPassword(): string {
    return this.password;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  getFirstName(): string {
    return this.firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  getLastName(): string {
    return this.lastName;
  }

  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}
