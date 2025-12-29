# Code Explanation

## 1. Single Responsibility Principle (SRP)
Each class in the project has a single responsibility:
- Shape classes (Rectangle, Circle, Triangle, etc.) are responsible only for
  calculating area and perimeter.
- ShapePrinter classes are responsible only for displaying shape information.
- ShapeFactory is responsible for creating shape objects.

This separation makes the code easier to understand and maintain.

---

## 2. Open/Closed Principle (OCP)
The system is open for extension but closed for modification:
- New shapes can be added by creating a new class that inherits from Shape.
- Existing code does not need to be modified to support new shapes.
- New printers (e.g., XML printer) can be added by inheriting from ShapePrinter.

---

## 3. Liskov Substitution Principle (LSP)
All subclasses of Shape can be used wherever a Shape object is expected:
- Rectangle, Circle, Triangle, Square, and Ellipse all implement the same interface.
- The program can treat all shapes uniformly without knowing their concrete types.

---

## 4. Interface Segregation Principle (ISP)
The Shape and ShapePrinter abstract classes define only the methods that are required:
- Shapes must implement area() and perimeter().
- Printers must implement print_info().
This prevents classes from being forced to implement unnecessary methods.

---

## 5. Dependency Inversion Principle (DIP)
High-level modules depend on abstractions, not concrete implementations:
- The printer works with the abstract Shape type.
- The main program does not depend on specific shape classes.
This increases flexibility and reduces coupling.

---

## 6. Design Patterns Used
- Factory Pattern: Used in ShapeFactory to create shape objects dynamically.
- Strategy-like behavior: Different printers provide different output formats.
