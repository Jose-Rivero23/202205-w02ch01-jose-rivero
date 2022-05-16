// eslint-disable-next-line import/prefer-default-export
export function strictEquals(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    } else if (!isNaN(a) && !isNaN(b)) {
        if (!a && !b) {
            return true;
        }
    }

    /* esta sería otr amanera de escribirlo.
    if ((a === 0 && b === -0) || (a === -0 && b === 0)) {
        return true;
    }
    if (isNaN(a) && isNaN(b)) {
        return false;
    } */
    return Object.is(a, b);
}
