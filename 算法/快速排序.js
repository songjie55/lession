//思路就是在数组里面去一个标准数，大于这个数的放到右边，小于或等于这个数的放到左边
//再对左右区间重复以上步骤，直到各区间只有一个数。
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);   //基准位置（理论上可任意选取）
    var pivot = arr.splice(pivotIndex, 1)[0];  //把基准数从数组里面抽出来；
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));  //链接左数组、基准数构成的数组、右数组
};
let arr = [1, 5, 3, 23, 1, 88, 43, 52, 3, 136, 3, 423, 4];
console.log(quickSort(arr));
