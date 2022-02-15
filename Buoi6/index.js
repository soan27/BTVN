var name = "Xoan";

let age = 22;

const Pi = 3.14;
console.log(name,age)

let text1 = 'text1';
let text2 = "text2";
let text3 = `text3`;

console.log(text1);
console.log(text2);
console.log(text3);

let car1 = {
    color: 'red',
    own: 'Xoan',
    isBuy: false
}

console.log(typeof car1);

let array1= [1,2,3,4,5,6];

console.log(typeof array1);

let noValid = null;

console.log("NoValid: ",typeof noValid);


console.log(typeof undefinedValuw);

console.log("hello");

let car ={
    color: 'red',
    price: 1000,
    own: "Xoan",
    isBuy: false
}

console.log( typeof car);

let array = [1,2,3,4,5,6,7,8,9,10]
let student = ["Xoan", "Quang"]

console.log( typeof student)

function name(){
    return 5;
}

// a^2x+bx+c = 0
let a = 1;
let b = 2;
let c = 1;
let x,x1,x2;
let detal = b*b -4*a*c;

if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log("Phương trình vô số nghiệm");
        }else{
            console.log("Phương trình vô nghiệm");
        }
    }else{
        x = -c/b;
        console.log("X= " , x);
    }
}else{
    if(detal<0){
        console.log("Phương trình vô nghiệm");
    }else if(detal == 0){
        console.log("Phương trình có 1 nghiệm duy nhất:");
        x = -b/(2*a)
        console.log("X = " , x);
    }else{
        console.log("Phương trình có 2 nghiệm phân biệt:");
        x1 = (-b + Math.sqrt(detal))/(2*a);
        console.log("X1 = ",x1);
        x2 = (-b - Math.sqrt(detal))/(2*a);
        console.log("X2 = ",x2);
    }
}