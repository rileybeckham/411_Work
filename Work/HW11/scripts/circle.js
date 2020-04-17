class Circle {
    constructor(xCord, yCord, radius, color) {
        this.xCord = xCord;
        this.yCord = yCord;
        this.radius = radius;
        this.startpoint = 0;
        this.endpoint = 2 * Math.PI;
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
        // had the same capitalization for startPoint.  
        //That caused an issue. Needed make the variable lower case
    get startPoint() {
        return this.startpoint;
    }
    set startPoint(startpoint) {
        this.startpoint = startpoint;
    }
    get endPoint() {
        return this.endpoint;
    }
    set endPoint(endpoint) {
        this.endpoint = endpoint;
    }
    get Color() {
        return this.color;
    }

    set Color(color) {
        this.color = color;
    }
}