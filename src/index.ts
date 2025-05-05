import { MyDatabase } from "./MyDatabase";

const db = MyDatabase.instance;

db.add({ name: "Lucas", age: 20 });
db.add({ name: "Lucas2", age: 22 });

const db2 = MyDatabase.instance;

console.log("DB2: ");
db2.show();

console.log("DB: ");
db.show();

console.log("DB = DB2: ");
console.log(db === db2);