# Testing Explanation

## 1. Unit Testing
Unit testing is used to test individual components of the system in isolation.

### Tools Used
- Python unittest framework
- unittest.mock for mocking dependencies

### Tested Components
- Rectangle, Circle, Square, Triangle, and Ellipse calculations
- Builder Pattern (TriangleBuilder)
- Adapter Pattern (OldCircleAdapter)
- Decorator Pattern (LoggingShapeDecorator)
- Singleton Pattern (PrinterManager)

Each test verifies that a single method behaves as expected.

---

## 2. Boundary and Edge Case Testing
The project includes tests for:
- Zero values (e.g., rectangle with zero width and height)
- Positive validation for calculated perimeter values
- Floating-point accuracy using assertAlmostEqual

---

## 3. Mocking and Observer Testing
Mocks are used to test the Observer pattern without relying on real observers.
This ensures:
- Observers are notified correctly
- Side effects are isolated from business logic

---

## 4. Automation Testing (System-Level Execution)
The automation-style script simulates:
- Creating multiple shapes
- Applying decorators and adapters
- Printing shapes through the PrinterManager

This validates that the system components work together correctly.

---

## 5. Intentional Failing Test
One test intentionally fails using assertNotEqual.
This is included to demonstrate:
- How failing tests are detected
- The importance of correct expected values
- How testing helps identify logical errors
