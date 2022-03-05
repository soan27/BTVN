let a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let b = [];
let max = Math.max(...a);

for (let i = 0; i < a.length; i++) {
    if (a[i] != max) {
        b.push(a[i]);
    }
}
let maxSecond = Math.max(...b);
if (b.length == 0) {
    console.log("-1");
} else {
    console.log(maxSecond);
}