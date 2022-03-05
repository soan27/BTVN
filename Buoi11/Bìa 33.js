let a = [9, 8, 7, 6, 4, 5, 3, 2, 1];

// đẩy số lớn nhất về cuối.
function bubbleSort(a, n) {
    let i, j;
    for (i = n - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                let temp;
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

bubbleSort(a, a.length);
console.log(a);