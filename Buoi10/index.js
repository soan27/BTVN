let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

arr.sort();

let a
    /*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
    }
    console.log("Phan tu " + x + " xuat hien " + count + " lan");
}