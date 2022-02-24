const removeSpaceAndEnter = (str) => {
    let str2 = str.trim();

    return str2.replace(/\s+/g, '');
}

console.log(removeSpaceAndEnter("	Hello world   "));

// \s : space thay thế 1 space bằng ''
// \s+: thay thế 1 hoặc nhiều space bằng ''
// trong cách này do dùng ký tự thay thế là '' nên là 2 cách là như nhau
// /g là cờ thay thế tất cả những gì xuất hiện trong chuỗi.