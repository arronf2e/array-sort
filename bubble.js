// 冒泡排序
/* 一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，
如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端
*/

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

console.log(sortedArray);