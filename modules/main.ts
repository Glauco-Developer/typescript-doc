/*
    TypeScript we can think on each file as a MODULE
*/

import { Point } from './point';

/* Multiple modules we use comma
    import { Point, a, b, c } from './point';
*/

let point = new Point(1, 2);
point.draw();
