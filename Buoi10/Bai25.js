let a = [1, 2, 3, 2, 3, 4, 6, 7];


function squared(arr) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        b.push(a[i] * a[i]);
    }
    return b;
}

console.log(squared(a));