function printallSubarrays(arr,k) {
    let map = { "0": -1 };
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum in map) {
            let d = map[sum];
            let s = sum;
            while(d <= arr.length && s == sum ){
                console.log(`SubArray ${d+1}-${i}`);
                d++;
                s = s - arr[d+1]
            }
        }
        map[sum] = i;
    }

}

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
console.log(printallSubarrays(arr));