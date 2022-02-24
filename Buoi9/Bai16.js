const findName = (str) => {
    let strN = str.replace("https://www.facebook.com/", "");
    let count = 0,
        str2;
    for (let i = 0; i < strN.length; i++) {
        if (strN[i] == ".") {
            count++;
        }
        if (count == 2) {
            str2 = strN.slice(0, i - 1);
        }
    }
    return str2.replace(".", " ");
}

console.log(findName("https://www.facebook.com/soan.hiha.5"))