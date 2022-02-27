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

// chuyển hóa object
for (let i = 0; i < students.length; i++) {
    let result = [];
    //lọc
    if (students[i].lastName.indexOf("Do") != -1) {
        result.push(students[i]);
    }
    console.log(result);
}