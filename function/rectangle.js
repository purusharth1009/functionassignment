class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // Method to calculate area
    area() {
        return this.length * this.width;
    }

    // Method to calculate perimeter
    perimeter() {
        return 2 * (this.length + this.width);
    }
}

// Example usage:
const myRectangle = new Rectangle(5, 10);
console.log("Area:", myRectangle.area()); // Output: 50
console.log("Perimeter:", myRectangle.perimeter()); // Output: 30
