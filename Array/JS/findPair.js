/*
Naive approach would be lookign for each combination and return if we find the sum found

Time Complexity: O(n^2)

*/
function findPair(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                return [i, j];
            }
        }
    }

    return [-1,-1];
}

/*
 Time complexity: O(n)
Spcae complexity : O(n)

*/
function findPairMehod2(arr,sum){
   let map = {};

   for(let i =0; i < arr.length; i++){
       let y = sum - arr[i];

       if(y in map){
           return [map[y], i]
       }else{
           map[arr[i]] =i;
       }
   }
   return [-1,-1]
}










let arr = [8, 7, 2, 5, 3, 1], target = 10;
console.log(findPair(arr,target));
console.log(findPairMehod2(arr,target))
