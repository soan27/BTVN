//   Tính diện tích hình thang. (a + b) *h /2

const tong = (a, b) => {
    console.log("Bat dau cong ");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                reject("Ban phai nhap so");
            }
            resolve(a + b);
        }, 1000);
    })
}

const nhan = (a, b) => {
    console.log("Bat dau nhan");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                reject("Ban phai nhap so");
            }
            resolve(a * b);
        }, 2000);
    })
}

const chia = (a, b) => {
    console.log("Bat dau chia");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof a != 'number') reject("Ban phai nhap so");
            else if (b == 0) reject("b khong the la 0");
            resolve(a / b);
        }, 1000);
    })
}

const ketqua = (a, b, h) => {
    return tong(a, b)
        .then((resolve) => nhan(resolve, h))
        .then((resolveNhan) => chia(resolveNhan, 2))
        .catch((error) => {
            console.log(error);
        })
}
ketqua(2, 3, "XOan")
    .then((result) => console.log("Kq = ", result))