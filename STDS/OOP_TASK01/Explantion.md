# Shapes Project - Code Explanation

## Overview
This project models geometric shapes and calculates their area and perimeter using Object-Oriented Programming (OOP) principles. The main goal is to demonstrate abstraction, inheritance, and polymorphism while writing maintainable and reusable code.

Shapes included:
- Rectangle
- Circle
- Triangle
- Square
- Ellipse

## Class Structure

### 1. Shape (Abstract Base Class)
- Defines the interface for all shapes.
- Contains two abstract methods:
  - `area()`
  - `perimeter()`
- Ensures that all subclasses implement these methods.

### 2. Rectangle
- Inherits from `Shape`.
- Has `width` and `height` attributes.
- Implements `area()` and `perimeter()` methods specific to rectangles.

### 3. Circle
- Inherits from `Shape`.
- Has `radius` attribute.
- Implements `area()` and `perimeter()` methods using circle formulas.

### 4. Triangle
- Inherits from `Shape`.
- Has sides `a`, `b`, `c`.
- `area()` uses Heron's formula.
- `perimeter()` sums the three sides.

### 5. Square
- Inherits from `Rectangle`.
- Constructor takes a single `side` parameter.
- Uses Rectangle's methods for area and perimeter.

### 6. Ellipse
- Inherits from `Shape`.
- Has `a` (semi-major axis) and `b` (semi-minor axis) attributes.
- `area()` uses π * a * b.
- `perimeter()` uses approximation formula for ellipse perimeter.

## Utility Function

### print_shape_info(shape)
- Takes a shape object as input.
- Prints the class name, area, and perimeter formatted to 2 decimal places.
- Works for any shape type, demonstrating polymorphism.

## Main Execution
- A list of shapes is created: Rectangle, Circle, Triangle, Square, Ellipse.
- `print_shape_info()` is called on each shape.
- The output shows the name, area, and perimeter of each shape.

## Concepts Demonstrated
- **Abstraction:** Using abstract base class `Shape`.
- **Inheritance:** Rectangle, Circle, Triangle, Square, Ellipse inherit from `Shape`.
- **Polymorphism:** `print_shape_info()` works for any Shape subclass.
- **Reusability:** Code structure allows adding new shapes without modifying existing code.
