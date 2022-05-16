import { strictEquals } from './equals.js';

const a = 1;
const b = NaN;
const c = 0;
const d = -0;
const e = '1';
const f = true;
const g = false;
const h = 'oil';
const i = 'wather';

console.log(strictEquals(a, a));
console.log(strictEquals(b, b));
console.log(strictEquals(c, d));
console.log(strictEquals(d, c));
console.log(strictEquals(a, e));
console.log(strictEquals(f, g));
console.log(strictEquals(g, g));
console.log(strictEquals(h, i));
