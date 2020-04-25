/* 
    Cohesion - things related should be part of one unit
    Avoid standalone functions
    This unit is called CLASS = group of variables (fields) and functions (methods) that are highly related
*/

class Point {
    x: number;
    y: number;

    draw() {
        console.log(`X: ${this.x} Y: ${this.y}`);
    }
}

/*
    let point: Point;
    Unlike the basics types, "Point" is a custom type
    When defining an object of a CUSTOM TYPE we need explicity alocate memory to it
*/

// the point bellow is an INSTANCE of the CLASS
let point = new Point();
point.x = 1;
point.y = 2;

point.draw();