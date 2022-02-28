// Write a function that, given a sorted array and a value, determines whether the value is found within the array through
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or
// less than a midway point, which is why the given array must be sorted.
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array

// val = 9
// arr = [1,2,3,5,7,9,10 ,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!

function iterate() {
    iterations++;
    console.log("recursiveBinarySearch Iteration: {iterations}", iterations);
    if (iterations > 9) {
        return;
    }
    iterate();
    return;
}
function recursiveBinarySearch(arr, val) {
    let middle = Math.floor((arr.length - 1) / 2);
    if (arr.length == 0) {
        return false
    }
    if (arr[middle] == val) {
        return true
    } else if (val < arr[middle]) {
        console.log("chekcing middle " + middle)
        console.log("checking left")
        return recursiveBinarySearch(arr.slice(0, middle), val)
    } else {
        console.log("chekcing middle " + middle)
        console.log("checking right")
        return recursiveBinarySearch(arr.slice(middle + 1, arr.length), val)
    }
}

function printArray(b){
    console.log(b)
}

var iterations = 0;
iterate();

console.log("________________")
console.log()

var arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]
var arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]
var arr3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]
var arr4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]

searchVal = 5;
iterations = 0;
console.log("seraching", searchVal)
console.log(recursiveBinarySearch(arr1, searchVal))
console.log("________________")
console.log()
searchVal = 6;
iterations = 0;
console.log("seraching", searchVal)
console.log(recursiveBinarySearch(arr2, searchVal))
console.log("________________")
console.log()
searchVal = 7;
iterations = 0;
console.log("seraching", searchVal)
console.log(recursiveBinarySearch(arr3, searchVal))
console.log("________________")
console.log()
searchVal = 37;
iterations = 0;
console.log("seraching", searchVal)
console.log(recursiveBinarySearch(arr4, searchVal))
console.log("________________")
console.log()

// [1, 2], ---> -2
// [1, 2], ---> 4
// [1, 2], ---> 1
// [1,2,2], ---> 2
// [], ---> 7
// [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], ---> 2
// [1, 1, 1, 1, 1], ---> 1
// [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], ---> 8
// make sure to test all given scenarios!
// extra challenge: don't use built-in functions such as splice() or slice(),
// with the exception of rounding functions (Math.floor(), Math.ceil())
