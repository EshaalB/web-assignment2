function chunkedArr(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log("Example 1", chunkedArr([1, 2, 3, 4, 5], 1));
console.log("Example 2", chunkedArr([1, 9, 6, 3, 2], 3));
console.log("Example 3", chunkedArr([8, 5, 3, 2, 6], 6));
console.log("Example 4", chunkedArr([], 1));
