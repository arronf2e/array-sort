// 冒泡排序

// 外层循环控制比较的轮数
// 内层循环控制每轮比较的次数
// 优化思路： 如果某一轮中没有进行过调换的操作，说明该数组已排序，后面几轮的排序是多余的。  exchange

function bubbleSort(array) {
    let exchange = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
             if(array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                exchange = true;
             }
        }
        if(!exchange) {
            break;
        }
    }
    return array;
}

var array = [3,1,2,4,5,6];

var sortedArray = bubbleSort(array);

console.log(sortedArray)