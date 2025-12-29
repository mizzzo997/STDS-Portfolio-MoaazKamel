
interface Drawable {
    void draw();
}


abstract class Shape {
    protected String color; 

 
    public Shape(String color) {
        this.color = color;
    }


    abstract double calculateArea();
    abstract double calculatePerimeter();

    public String getColor() {
        return color;
    }
}


class Rectangle extends Shape implements Drawable {
    private double width;
    private double height;

    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    double calculateArea() {
        return width * height;
    }

    @Override
    double calculatePerimeter() {
        return 2 * (width + height);
    }

    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " rectangle with width " + width + " and height " + height);
    }
}


class Circle extends Shape implements Drawable {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle with radius " + radius);
    }
}


class Triangle extends Shape implements Drawable {
    private double side1, side2, side3;

    public Triangle(String color, double side1, double side2, double side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    @Override
    double calculateArea() {

        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    @Override
    double calculatePerimeter() {
        return side1 + side2 + side3;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " triangle with sides " + side1 + ", " + side2 + ", " + side3);
    }
}


public class ShapeProject {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle("Blue", 5, 3);
        Shape circle = new Circle("Red", 4);
        Shape triangle = new Triangle("Green", 3, 4, 5);

        Shape[] shapes = {rectangle, circle, triangle};

        for (Shape shape : shapes) {
            System.out.println("Shape color: " + shape.getColor());
            System.out.println("Area: " + shape.calculateArea());
            System.out.println("Perimeter: " + shape.calculatePerimeter());

            if (shape instanceof Drawable) {
                ((Drawable) shape).draw();
            }
            System.out.println("---------");
        }
    }
}