/* 
    in oject oriented programming languages we have the concept of CONSTRUCTORS
    every class can have a constructor 
    which is basically a method that is called when we create an instance of the class 
*/

class Point {
    x: number;
    y: number;

    /*
        ? turns the parameter OPTIONAL
        a typescript rule is once we have an optional parameter (?)
        all the paramater on the right side should be optional as well
    */
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}

let point = new Point(1, 2); // constructor parameters

let point1 = new Point(); // once the constructor has optional parameter (?)
point.draw();
point1.draw();

/* too verbose
    point.x = 1;
    point.y = 2;
*/