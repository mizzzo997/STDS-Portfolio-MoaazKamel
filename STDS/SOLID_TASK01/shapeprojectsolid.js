class Shape {
  constructor() {
    if (new.target === Shape) throw new Error("Cannot instantiate abstract class Shape");
  }
  name() {
    return this.constructor.name;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    if (width <= 0 || height <= 0) throw new Error("Invalid dimensions");
    this.width = width;
    this.height = height;
    Object.freeze(this);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    if (radius <= 0) throw new Error("Invalid radius");
    this.radius = radius;
    Object.freeze(this);
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    if (a <= 0 || b <= 0 || c <= 0) throw new Error("Invalid triangle sides");
    if (a + b <= c || a + c <= b || b + c <= a) throw new Error("Triangle inequality violated");
    this.a = a;
    this.b = b;
    this.c = c;
    Object.freeze(this);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const Calculators = new Map();

const rectangleCalculator = rect => {
  const area = rect.width * rect.height;
  const perimeter = 2 * (rect.width + rect.height);
  return { area, perimeter };
};

const circleCalculator = c => {
  const area = Math.PI * c.radius ** 2;
  const perimeter = 2 * Math.PI * c.radius;
  return { area, perimeter };
};

const triangleCalculator = t => {
  const s = (t.a + t.b + t.c) / 2;
  const area = Math.sqrt(s * (s - t.a) * (s - t.b) * (s - t.c));
  const perimeter = t.a + t.b + t.c;
  return { area, perimeter };
};

const squareCalculator = s => {
  const area = s.width * s.height;
  const perimeter = 2 * (s.width + s.height);
  return { area, perimeter };
};

Calculators.set(Rectangle, rectangleCalculator);
Calculators.set(Circle, circleCalculator);
Calculators.set(Triangle, triangleCalculator);
Calculators.set(Square, squareCalculator);

class CalculatorRegistry {
  static getCalculator(shape) {
    for (const [Type, calc] of Calculators.entries()) {
      if (shape instanceof Type) return calc;
    }
    return null;
  }
  static register(type, calculator) {
    Calculators.set(type, calculator);
  }
}

class ShapeFactory {
  constructor() {
    this.registry = new Map();
  }
  register(name, ctor) {
    this.registry.set(name.toLowerCase(), ctor);
  }
  create(name, ...args) {
    const ctor = this.registry.get(name.toLowerCase());
    if (!ctor) throw new Error(`Unknown shape type: ${name}`);
    return new ctor(...args);
  }
}

const factory = new ShapeFactory();
factory.register("rectangle", Rectangle);
factory.register("circle", Circle);
factory.register("triangle", Triangle);
factory.register("square", Square);

class TextFormatter {
  format(shape, area, perimeter) {
    const lines = [];
    lines.push(`Shape: ${shape.name()}`);
    lines.push(`Area: ${area == null ? "N/A" : area.toFixed(4)}`);
    lines.push(`Perimeter: ${perimeter == null ? "N/A" : perimeter.toFixed(4)}`);
    return lines.join("\n");
  }
}

class JsonFormatter {
  format(shape, area, perimeter) {
    return JSON.stringify({
      shape: shape.name(),
      area: area == null ? null : Number(area.toFixed(6)),
      perimeter: perimeter == null ? null : Number(perimeter.toFixed(6))
    }, null, 0);
  }
}

class ShapeService {
  constructor(factory, formatter) {
    this.factory = factory;
    this.formatter = formatter;
  }
  create(name, ...args) {
    return this.factory.create(name, ...args);
  }
  describe(shape) {
    const calc = CalculatorRegistry.getCalculator(shape);
    if (!calc) return this.formatter.format(shape, null, null);
    const { area, perimeter } = calc(shape);
    return this.formatter.format(shape, area, perimeter);
  }
}

class Printer {
  constructor(service) {
    this.service = service;
  }
  print(shape) {
    console.log(this.service.describe(shape));
    console.log("-".repeat(28));
  }
}

const textService = new ShapeService(factory, new TextFormatter());
const jsonService = new ShapeService(factory, new JsonFormatter());
const textPrinter = new Printer(textService);

const shapes = [
  textService.create("rectangle", 5, 3),
  textService.create("circle", 4),
  textService.create("triangle", 3, 4, 5),
  textService.create("square", 6)
];

shapes.forEach(s => textPrinter.print(s));

shapes.forEach(s => console.log(jsonService.describe(s)));
