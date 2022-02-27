let arr = [1, 2, 3, 4, 6, 7];
let k = 5;

function findNumberNear(arr) {
    let b = [];
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        b.push(Math.abs(arr[i] - k));
    }

    let min = b[0];
    let index = 0;

    for (let j = 1; j < b.length; j++) {
        if (b[j] < min) {
            min = b[j];
            index = j;
        } else if (b[j] == min) {

        }
    }
    return {
        index: arr[index]
    };
}
console.log(findNumberNear(arr));