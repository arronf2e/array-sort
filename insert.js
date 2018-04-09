// 插入排序
/*
插入排序原理很简单，讲一组数据分成两组，我分别将其称为有序组与待插入组。每次从待插入组中取出一个元素，与有序组的元素进行比较，并找到合适的位置，
将该元素插到有序组当中。就这样，每次插入一个元素，有序组增加，待插入组减少。直到待插入组元素个数为0

3   1   4   2   7   5
有序数组        无序数组
3               1   4   2   7   5   
1 3             4   2   7   5   
1 3 4           2   7   5   
1 2 3 4         7   5   
1 2 3 4 7       5
1 2 3 4 5 7
*/

function insertSort(arr) {
    let temp = 0, // 取无序数组的第一个元素
        k = 0;  // 暂存有序数组的最后一项下标
    for (let i = 1; i < arr.length; i++) {
        let k = i - 1;
        temp = arr[i];
        while(k >= 0 && temp < arr[k]) {
            arr[k+1] = arr[k];
            k--;
        }
        arr[k + 1] = temp;
    }
    return arr;
}

var array = [3,1,2,4,5,6];

var sortedArray = insertSort(array);

console.log(sortedArray);
 