function smallestMissing(arr, low, high) {
    if (low > high) return low;

    let middle = Math.floor((low + high) / 2);

    if (arr[middle] == middle) {
        return smallestMissing(arr, middle + 1, high)
    } else {
        return smallestMissing(arr, low, middle - 1)
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(smallestMissing(arr, 0, arr.length - 1))