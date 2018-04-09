// 选择排序
/* 选择排序(Selection sort)是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小(或最大)的一个元素，存放在序列的起始(末尾)位置，
直到全部待排序的数据元素排完。选择排序是不稳定的排序方法（比如序列[5， 5， 3]第一次就将第一个[5]与[3]交换，导致第一个5挪动到第二个5后面）。
 */
// 外层循环控制轮数

// 选出最小的元素
function findMinPos(arr) {
}

// 选出最大元素
function findMaxPos(arr) {
    var max = arr[0],
        pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            pos = i;
        }
    }
    return pos;
 }

 function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var pos = findMaxPos(arr.slice(0, arr.length - i));
        // 如果当前最大数在末尾，不必交换
        if(pos == arr.length - i - 1) {
            continue;
        }
        var temp = arr[pos];
        arr[pos] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
 }

var array = [3,1,2,4,5,6];

var sortedArray = selectionSort(array);

console.log(sortedArray);
 