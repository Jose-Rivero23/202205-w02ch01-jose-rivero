// eslint-disable-next-line import/prefer-default-export
export function strictEquals(a, b) {
    if ((a === 0 && b === -0) || (a === -0 && b === 0)) {
        return true;
    }
    if (isNaN(a) && isNaN(b)) {
        return false;
    }
    return Object.is(a, b);
}
