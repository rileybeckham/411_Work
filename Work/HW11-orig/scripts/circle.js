class Circle{
    constructor(xCord, yCord, radius, color) {
        this.xCord = xCord;
        this.yCord = yCord;
        this.radius = radius;
        this.startPoint = 0;
        this.endPoint = 2 * Math.PI;
        this.color = color;
    }
    get x() {
        return this.xCord;
    }
    set x(x) {
        this.xCord = x;
    }
    get y() {
        return this.yCord;
    }
    set y(y) {
        this.yCord = y
    }
    get r() {
        return this.radius;
    }
    set r(r) {
        this.radius = r;
    }
    get startPoint() {
        return this.startPoint;
    }
    set startPoint(startPoint) {
        this.startPoint = startPoint;
    }
    get endPoint() {
        return this.endPoint;
    }
    set endPoint(endPoint) {
        this.endPoint = endPoint;
    }
    get color() {
        return this.color;
    }
}