from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def perimeter(self):
        return 2 * math.pi * self.radius


class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))

    def perimeter(self):
        return self.a + self.b + self.c


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)


class Ellipse(Shape):
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def area(self):
        return math.pi * self.a * self.b

    def perimeter(self):
        h = ((self.a - self.b)**2) / ((self.a + self.b)**2)
        return math.pi * (self.a + self.b) * (1 + (3 * h) / (10 + math.sqrt(4 - 3 * h)))


def print_shape_info(shape):
    print(f"Shape: {shape.__class__.__name__}")
    print(f"Area: {shape.area():.2f}")
    print(f"Perimeter: {shape.perimeter():.2f}")
    print("-" * 30)


if __name__ == "__main__":
    shapes = [
        Rectangle(5, 3),
        Circle(4),
        Triangle(3, 4, 5),
        Square(6),
        Ellipse(5, 3)
    ]

    for shape in shapes:
        print_shape_info(shape)

