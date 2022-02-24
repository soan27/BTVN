const normalizeString = (str) => {
    let str2 = str.trim().replace(/\s+/g, ' ');
    let name = str2.toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (i == 0 || name.charAt(i - 1) == " ") {
            name = name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
        }
    }
    return name;
}
console.log(normalizeString("      HOang Thi XoAn"));