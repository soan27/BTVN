const data = [
    { name: "Tung", age: 27, isSchool: false },
    { name: "Khoa", age: 20, isSchool: true },
    { name: "Triet", age: 18, isSchool: false },
    { name: "Hong", age: 15, isSchool: false },
    { name: "Tring", age: 10, isSchool: false },
];
// Tìm tất cả những người có tuổi lớn hơn 18

let a = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].age > 18) {
        a.push(data[i]);
    }
}
console.log(a);

const peopleOver18 = data.filter((item, index) => {
    return item.age > 18;
})


// Tìm tất cả những người còn đang đi học
let b = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].isSchool == true) {
        b.push(data[i]);
    }
}
console.log(b);

const peopleIsSchool = data.filter((item) => {
    return item.isSchool;

})


// tính độ tuổi tb của tất cả mọi người
let sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i].age;
}

let tb = sum / data.length;
console.log(tb);

const sum2 = arr => data.reduce((sum, el) => sum + +el.age, 0) / data.length

let sumAgeAvg = data.reduce((accumalator, element) => {
    return accumalator + +element.age
}, 0);

console.log(sumAgeAvg / data.length);


let str = 'Honda Kiyoshi Suzuki';
let special2 = '$`Chis';
console.log(str.replace('Kiyoshi', special2));
//> Honda Honda Chis Suzuki