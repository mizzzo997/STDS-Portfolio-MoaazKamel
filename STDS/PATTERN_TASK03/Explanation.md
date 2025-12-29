# Code Explanation and Design Patterns

## 1. Builder Pattern
The Builder pattern is used to construct complex objects step by step.

### Examples:
- TriangleBuilder
- EllipseBuilder

This allows controlled object creation and improves readability when objects
require multiple parameters.

---

## 2. Factory Pattern
The ShapeFactory class is responsible for creating shape objects dynamically
based on a given type.

This removes direct dependency on concrete shape classes and improves extensibility.

---

## 3. Adapter Pattern
The OldCircleAdapter adapts the OldCircleSystem to match the Shape interface.

This allows integration of legacy systems without modifying existing code.

---

## 4. Decorator Pattern
The LoggingShapeDecorator dynamically adds logging behavior to shapes without
modifying their original classes.

This follows the Open/Closed Principle.

---

## 5. Observer Pattern
The observer pattern is implemented using:
- Observer interface
- ConsoleObserver
- PrintSubject

Observers are notified whenever a shape is printed, allowing loose coupling
between the printing process and side effects like logging or monitoring.

---

## 6. Singleton Pattern
The PrinterManager class ensures that only one instance exists throughout
the application lifecycle.

This is useful for managing shared resources such as observers and printers.

---

## 7. Strategy Pattern (Behavioral Concept)
Different printing strategies are implemented:
- TextPrinter
- JSONPrinter

They share a common interface and can be swapped at runtime.

---

## 8. Abstraction and Polymorphism
The Shape abstract class ensures that all shapes implement area() and perimeter(),
allowing the system to treat all shapes uniformly.
