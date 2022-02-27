let students = [{
        id: "T3HXX1",
        firstName: "Ngan",
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



students.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);

console.log(students.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1));