const reverseString = (str) => {
    let i, strN = '';
    for (i = str.length - 1; i >= 0; i--) {
        strN += str[i];
    }
    return strN;
}

console.log(reverseString("This is a beautiful day"));