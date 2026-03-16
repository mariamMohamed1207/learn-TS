abstract class PaymentProvider {
  private pin: number;
  public accName: string;
  private balance: number;
  constructor(pin: number, accName: string, balance: number) {
    this.pin = pin;
    this.accName = accName;
    this.balance = balance;
  }
  validateAmount(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
  }
  private authorize(pin: number) {
    if (this.pin != pin) {
      throw new Error("Unauthorized!");
    }
  }
  protected get AccName() {
    return this.accName;
  }
  get Balance(): number {
    return this.balance;
  }
  setBalance(balance: number) {
    this.balance = balance;
  }
  changePin(newPin: number, oldPin: number) {
    this.authorize(oldPin);
    if (newPin < 1000) {
      throw new Error("PIN must be at least 4 digits!");
    }
    this.pin = newPin;
  }
  deposit(pin: number, amount: number) {
    this.authorize(pin);
    this.validateAmount(amount);
    this.balance += amount;
  }
  withdraw(pin: number, amount: number) {
    this.authorize(pin);
    this.validateAmount(amount);
    if (amount > this.balance) {
      throw new Error("Invalid Amount!");
    }
    this.balance -= amount;
  }
  public abstract processPayment(pin: number, amount: number): void;
  public abstract refund(pin: number, amount: number): void;
}
class PaypalProvider extends PaymentProvider {
  processPayment(pin: number, amount: number): void {
    const fee = amount * 0.03;
    const total = amount + fee;
    this.withdraw(pin, total);
    console.log(`Sending ${amount} to Paypal account: ${this.AccName}`);
    console.log(`PayPal fee: ${fee}`);
  }
  refund(pin: number, amount: number): void {
    this.deposit(pin, amount);
    console.log(`Refunding ${amount} from Paypal account: ${this.AccName}`);
  }
}
class StripeProvider extends PaymentProvider {
  processPayment(pin: number, amount: number): void {
    const fee = amount * 0.03;
    const total = amount + fee;
    this.withdraw(pin, total);
    console.log(`Sending ${amount} to Stripe account: ${this.AccName}`);
    console.log(`Stripe fee: ${fee}`);
  }
  refund(pin: number, amount: number): void {
    this.deposit(pin, amount);
    console.log(`Refunding ${amount} from Stripe account: ${this.AccName}`);
  }
}
class CryptoProvider extends PaymentProvider {
  processPayment(pin: number, amount: number): void {
    const fee = amount * 0.03;
    const total = amount + fee;
    this.withdraw(pin, total);
    console.log(`Sending ${amount} to Crypto account: ${this.AccName}`);
    console.log(`Crypto fee: ${fee}`);
  }
  refund(pin: number, amount: number): void {
    this.deposit(pin, amount);
    console.log(`Refunding ${amount} from Crypto account: ${this.AccName}`);
  }
}

const pp = new PaypalProvider(1234, "@hmed125", 2000);
const stripee = new StripeProvider(2222, "@lii757", 12000);
const cryptoo = new CryptoProvider(5656, "UseR008", 1000);

pp.processPayment(1234, 300);
pp.refund(1234, 150);
console.log("PayPal Balance:", pp.Balance);
console.log("----------------------");
stripee.processPayment(2222, 600);
stripee.refund(2222, 100);
console.log("Stripe Balance:", stripee.Balance);
console.log("----------------------");
cryptoo.processPayment(5656, 200);
cryptoo.refund(5656, 200);
console.log("Crypto Balance:", cryptoo.Balance);
console.log("----------------------");
