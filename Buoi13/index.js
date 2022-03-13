// (((a +b) /m *n )+ 8 ) *k
// phép tính cộng: mất 3s
// phép tinh nhân: mất 2s
// phép tính chia: mất 4s

function calcPlus(a, b, cb) {
    console.log("Bat dau cong");
    setTimeout(() => {
        let tong = a + b;
        console.log(tong);
        cb(tong);
    }, 3000);
}

function calcDiv(a, b, cb) {
    console.log("Bat dau chia")
    setTimeout(() => {
        let thuong = a / b;
        console.log(thuong);
        cb(thuong);
    }, 4000);
}

function calcMulti(a, b, cb) {
    console.log("Bat dau nhan")
    setTimeout(() => {
        let tich = a * b;
        console.log(tich)
        cb(tich);
    }, 2000);
}
// (((a +b) /m *n )+ 8 ) *k

function result(a, b, m, n, k) {
    calcPlus(a, b, (dataTong) => {
        calcDiv(dataTong, m, (dataThuong) => {
            calcMulti(dataThuong, n, (dataTich) => {
                calcPlus(dataTich, 8, (dataTongEnd) => {
                    calcMulti(dataTongEnd, k, (final) => {
                        console.log("result: ", final);
                    })
                })
            })
        })
    })
}

result(2, 4, 2, 10, 2);