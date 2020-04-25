/*
    Access modifier is basically a keryword that we can apply to a member of a class to control its access from the outside
    in typescript we have three access modifiers
    public, private, protected
    by default all members are public
*/
class Point {
    private x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y
    }
}

let point = new Point(1, 2);
point.x = 1; // error member is private