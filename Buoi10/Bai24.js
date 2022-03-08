let a = [1, 2, 3, 2, 3, 4, 6, 7]

let i, j;

function isPrime(a) {

    if (a < 2) {
        return false
    } else if (a == 2) {
        return true
    } else if (a % 2 == 0) {
        return false;
    } else {
        for (i = 3; i < Math.sqrt(a); i = i + 2) {
            if (a % i == 0) {
                return false
            }
        }
        return true
    }
}


let b = [];

for (let j = 0; j < a.length; j++) {
    if (isPrime(a[j])) {
        b.push(a[j]);
    }
}

console.log(b);