let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let key = 26;
let prev;
let b = [];
a.sort();
for (let i = 0; i < a.length; i++) {
    if (a[i] !== prev) {
        b.push(a[i]);
    }
    prev = a[i];
}
console.log(b);
let dem = 0;
for (let i = 0; i < b.length; i++) {
    for (let j = i + 1; j < b.length; j++) {
        for (k = b.length - 1; k > 0; k--) {
            if (b[i] + b[j] + b[k] == key) {
                dem = 1;
            }
        }
    }
}

if (dem == 0) {
    console.log("No");
} else {
    console.log("Yes");
}