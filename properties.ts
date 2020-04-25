/*
    If we have private fields and we want ti give the ability
    to read-only (getter)
    or to set the values (setter)
    or some basic validation 

    A property looks like a field from the outside but internally it's really a method in the class (getter,setter)
*/
class Point {

    constructor(private _x: number, private _y: number) { }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.')

        this._x = value;
    }
}

let point = new Point(1, 2);

let newX = point.x // (getter)
point.x = 10; // (setter)