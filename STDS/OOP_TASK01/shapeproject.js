class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly!");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }

  printInfo() {
    console.log(`Shape: ${this.constructor.name}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  printInfo() {
    console.log(
      `Rectangle - Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  printInfo() {
    console.log(
      `Circle - Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`
    );
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  area() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  perimeter() {
    return this.a + this.b + this.c;
  }

  printInfo() {
    console.log(
      `Triangle - Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`
    );
  }
}

function displayShape(shape) {
  shape.printInfo();
  console.log("----------------------------");
}

const shapes = [
  new Rectangle(5, 3),
  new Circle(4),
  new Triangle(3, 4, 5),
];

shapes.forEach((shape) => displayShape(shape));
