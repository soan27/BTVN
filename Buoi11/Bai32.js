let a = [1, 3, 6, 9, 11, 20];
let key = 13;

// tìm ra mảng chứa phần tử nhỏ hơn key
let check = a.filter((item) => {
    return item < key;
});
// tìm được thằng đứng trước key cần chèn
let max = Math.max(...check);
let index;
console.log(max);

// tìm được vị trị trước đó của key
for (let i = 0; i < a.length; i++) {
    if (a[i] == max) {
        index = i;
    }
}
// chèn vào mảng.
a.splice(index + 1, 0, key);
console.log(a);

//Cách khác
// let a = [1, 3, 6, 9, 11, 20];
// let k = 13
// a.push(k)
// a.sort((a, b) => a - b)
// console.log(a);