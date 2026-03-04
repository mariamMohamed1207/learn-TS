class StudentAccount {
  constructor(
    public name: string,
    private grades: number[],
    private accPassword: number,
    private tuitionBalance: number,
  ) {
    this.name = name;
    this.grades = grades;
    this.accPassword = accPassword;
    this.tuitionBalance = tuitionBalance;
  }
  private passwordauthorization(accPassword: number) {
    if (this.accPassword != accPassword) {
      throw new Error("Unauthorized!");
    }
  }
  changePassword(oldPassword: number, newPassword: number) {
    this.passwordauthorization(oldPassword);
    const passwordStr = `${newPassword}`;
    if (passwordStr.length < 6) {
      throw new Error("Invalid new password!");
    }
    this.accPassword = newPassword;
  }

  set ReName(newName: string) {
    if (newName.length < 3) {
      throw new Error("Name must be at least 3 characters!");
    }
    this.name = newName;
  }
  get TuitionBalance(): number {
    return this.tuitionBalance;
  }
  getGrades(accPassword: number): number[] {
    this.passwordauthorization(accPassword);
    return this.grades;
  }
  payTuition(accPassword: number, amount: number) {
    this.passwordauthorization(accPassword);
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }
    if (amount > this.tuitionBalance) {
      throw new Error("The amount exceeds remaining tuition balance!");
    }
    this.tuitionBalance -= amount;
  }
}
const acc = new StudentAccount("Ahmed", [100, 85, 92, 98], 1234567, 7500);
console.log(acc.name);
console.log(acc.getGrades(1234567));
// acc.changePassword(1234567, 87654321);

console.log(acc.TuitionBalance);
acc.payTuition(1234567, 3200);
console.log(acc.TuitionBalance);

acc.ReName = "Yusuf";
console.log(acc.name);
