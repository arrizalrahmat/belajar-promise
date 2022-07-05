export default class Person {
  constructor(name, profession, age) {
    this.name = name;
    this.profession = profession;
    this.age = age;
  }
  doWork() {
    // instance method => sebuah function yang dimiliki oleh class Person
    return `${this.name} is working as a ${this.profession}`;
  }

  getName() {
    return this.name;
  }
}

export class Programmer extends Person {
  constructor(name, age) {
    super(name, 'Programmer', age);
    this.license = 'Front End';
  }

  doWork() {
    return `Males kerja`;
  }

  jogging() {
    return 'Capek broo';
  }
}

export class DataScientist extends Person {
  constructor(name, age) {
    super(name, 'Programmer', age);
  }

  doWork() {
    return `Rajin kerja`;
  }
}

const arrizal = new Person('Arrizal', 'Programmer');
const ujang = new Person('Ujang', 'Teacher');
// console.log(ujang.doWork());
// console.log(Person.greetings());

const harry = new Programmer('Harry', 18);
const bambang = new DataScientist('Bambang', 20);
// console.log(arrizal.license);
// console.log(bambang.jogging());
// console.log(harry.jogging());
// console.log(arrizal.doWork());
