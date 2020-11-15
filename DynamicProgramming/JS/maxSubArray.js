// 68:https://www.techiedelight.com/maximum-subarray-problem-kadanes-algorithm/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /*

  Time Complexity: O(n)
  Space Complexity: O(n)

 */
var maxSubArray = function (nums) {
    let dp = new Array(nums.length).fill(-200000);

    dp[0] = nums[0];
    for(let i=1; i < nums.length; i++){
        dp[i] = Math.max(nums[i], nums[i]+ dp[i-1])
    }

    return Math.max(...dp)


};



 /*

  Time Complexity: O(n)
  Space Complexity: O(1)

 */
var maxSubArray = function (nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];


    for(let i=1; i < nums.length;i++){

        let runningSum = maxEndingHere + nums[i];
        maxEndingHere = Math.max(runningSum,nums[i])
        maxSoFar = Math.max(maxSoFar, maxEndingHere)

    }

    return maxSoFar

};