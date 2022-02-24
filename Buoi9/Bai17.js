// tim max
const maxNumber = (a, b, c) => {
    let max;
    max = a;
    if (b > a) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

// tim min

const minNumber = (a, b, c) => {
    let min;
    min = a;
    if (b < a) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log("Max: " + maxNumber(11, 9, 7));
console.log("Min: " + minNumber(-1, -5, 1));