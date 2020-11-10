/*
 Sub Array Sum:

 Note: In progress

*/


function zeroSumNaiveSolution(arr) {
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let sub = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {

            if (sub.reduce((a, b) => a + b) == 0) {
                console.log(sub);

            }
            sub.push(arr[j])

        }
    }

    return result;

}



function zeroSumSubarray(arr) {

    let set = new Set();
    set.add(0);

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (set.has(sum)) {
            return true;
        } else {
            set.add(sum);
        }
    }

    return false;
}
/*
  sum =0

  Set = 0, 4, 6, 3,2
  [4, 2, -3, -1, 0, 4 ]

  4



*/
let arr = [4, 2, -3, -1, 0, 4];
arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
console.log(zeroSumSubarray(arr));
console.log(zeroSumSubarray(arr));