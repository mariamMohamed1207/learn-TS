// class Student : name:string, age:number, subject []sting
// methods: calcBirthYear, logData

class Student {
  name: string;
  age: number;
  subjects: string[] = [];
  constructor(name: string, age: number, subjects: string[]) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
  calcBirthYear(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
  logData() {
    console.log("Name:" + this.name);
    console.log("Age:" + this.age);
    console.log("BirthYear:" + this.calcBirthYear());
    console.log("Subjects:", this.subjects.join(" & "));
  }
}
const student1 = new Student("ali", 19, ["Biology"]);
const student2 = new Student("omar", 15, ["Math", "Arabic"]);

student1.logData();
student2.logData();
