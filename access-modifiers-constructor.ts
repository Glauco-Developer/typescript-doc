class Point {
    // x: number; deleted
    // y: number; deleted

    constructor(public x: number, private y: number) { }
}

let point = new Point(1, 2);
point.x = 1; // it's accessible as it is public