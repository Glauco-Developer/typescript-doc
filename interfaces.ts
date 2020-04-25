// interface
// interfaces are purely for declarations, cannot include any implementation
// PascalNamedConvertion
interface Point {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint4 = (point: Point) => {
    // ...
}

// function multiple paramaters (bad way)
let drawPoint = (a, b, c, d, e, f) => {
    // ...
}

// object as paramater
let drawPoint2 = (point) => {
    // ...
}
drawPoint2({
    x: 1,
    y: 2
})

// inline annotation (simple cases)
let drawPoint3 = (point: { x: number, y: number }) => {
    // ...
}
drawPoint2({
    x: 1,
    y: 2
})