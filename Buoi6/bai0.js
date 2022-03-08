function isPrime() {
    let a;
    let i;
    if (a < 2) {
        console.log("No");
        return
    } else if (a == 2) {
        console.log("Yes");
        return
    } else if (a % 2 == 0) {
        return false;
    } else {
        for (i = 3; i < Math.sqrt(a); i = i + 2) {
            if (a % i == 0) {
                console.log("No");
                break;
            }
        }
        console.log("Yes");
    }
}
a = 10;

isPrime();