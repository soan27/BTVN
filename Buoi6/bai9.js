function checkSymmetricNumber() {
    let n = 1012;
    let temp, sum = 0, r;
    for (temp = n; n != 0; n = n / 10) {
        r = n % 10;
        sum = sum * 10 + r;
    }

    if (temp == sum) {
        console.log("YES");
    } else console.log("NO");
}

checkSymmetricNumber();


function isDrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true

}
let str = "123321";
console.log(isDrome(str));

console.log(Math.floor(Math.random() * (6 - 1)) + 1
);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(6));


//chuẩn hóa
// const toNamalName = (name) => {
//     let name1 = name.toLowerCase();
//     let name2 = name.slit(" ");
//     let name3 = name2.map( (el) =>{
//         return "test";
//     } );
//     console.log(name3);
// };

//cách khác

const toNomalName = (name) => {
    name = name.toLowerCase();
    console.log(name);
    for(let i =0; i<name.length; i++){
        if(i == 0 || name.charAt(i-1) == " "){
            name = name.slice(0,i) +name.charAt(i).toUpperCase() + name.slice(i+1);
        }
    }
}
nametest = "Xoan hoang";
toNomalName(nametest);