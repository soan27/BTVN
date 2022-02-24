const countSpace = (str) => {
    let i, sum = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            sum += 1;
        }
    }
    return sum;
}
console.log(countSpace(" Hello  world"));