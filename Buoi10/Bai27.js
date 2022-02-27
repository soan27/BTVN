let students = [{
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ]
    // hàm chuẩn hóa
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

// chuyển hóa object
for (let i = 0; i < students.length; i++) {
    let result = [];

    //chuẩn hóa
    students[i].firstName = normalizeString(students[i].firstName);
    students[i].lastName = normalizeString(students[i].lastName);

    //lọc
    if (students[i].firstName.length >= 3) {
        if (students[i].firstName.indexOf("a") != -1 ||
            students[i].firstName.indexOf("A") != -1) {
            result.push(students[i]);
        }
    }
    console.log(result);
}