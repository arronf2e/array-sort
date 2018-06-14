// 选择排序
/* 选择排序(Selection sort)是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小(或最大)的一个元素，存放在序列的起始(末尾)位置，
直到全部待排序的数据元素排完。选择排序是不稳定的排序方法（比如序列[5， 5， 3]第一次就将第一个[5]与[3]交换，导致第一个5挪动到第二个5后面）。
 */

function selectionSort(array) {
	let sortedArray = [];
	while(array.length) {
		let min = Math.min(...array);
		let minIndex = array.findIndex(item => item == min);
		sortedArray.push(min);
		array.splice(minIndex, 1);
	}
	return sortedArray;
 }

var array = [3,1,2,4,5,6];

var sortedArray = selectionSort(array);

console.log(sortedArray);
 
