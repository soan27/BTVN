let x1 = 1
let x2 = 18;
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

for (j = x1; j <= x2; j++) {
    if (isPrime(j)) {
        console.log(j);
    }
}