import { User } from './User';

export class MyDatabase {
  private static _instance: MyDatabase | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabase {
    if (MyDatabase._instance === null) {
      MyDatabase._instance = new MyDatabase();
    }

    return MyDatabase._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}