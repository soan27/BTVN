let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function FindNumberInArray(arr) {
    let a = [];
    let b = [];
    let prev;
    arr.sort();
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }
    let maxCount = Math.max(...b);
    let index = b.indexOf(maxCount);

    return { number: a[index], count: maxCount };
}

console.log(FindNumberInArray(input));