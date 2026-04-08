interface Ishape {
  area(): number;
}
class Circle implements Ishape {
  constructor(private readonly radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle implements Ishape {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {}
  area(): number {
    return this.width! * this.height!;
  }
}

class Calculating {
  calculate(shape: Ishape): number {
    return shape.area();
  }
}
const circle = new Circle(12);
const rec = new Rectangle(10, 6);
const calc = new Calculating();

console.log(calc.calculate(circle));
console.log(calc.calculate(rec));
