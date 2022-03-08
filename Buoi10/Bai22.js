let a = [1, 2, 3, 4, 6, 7, 8, 9, 9, 8, 7, 6, 4, 3, 2, 1]

function checkNumber(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let md;
    const median = arr => {
        let middle = Math.floor(arr.length / 2);
        arr = [...arr].sort((a, b) => a - b);
        if (arr.length % 2 !== 0) {
            md = arr[middle];
        } else {
            md = (arr[middle - 1] + arr[middle]) / 2;
        }

    };
    median(a);
    return { max: max, min: min, medium: md }
}

console.log(checkNumber(a));