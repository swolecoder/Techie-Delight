
//method1
/*
 Time Complexity: O(2 ^ (mn))


*/
var longestCommonSubsequence = function (text1, text2) {

    let m1 = text1.length;
    let m2 = text2.length;

    function helper(text1, text2, m, n) {
        if (m == 0 || n == 0) return 0;

        if (text1[m - 1] == text2[n - 1]) {
            return 1 + helper(text1, text2, m - 1, n - 1)
        } else {
            return Math.max(helper(text1, text2, m - 1, n), helper(text1, text2, m, n - 1))
        }
    }

    return helper(text1, text2, m1, m2);

}

//method2
/*
 Time Complexity: O((mn))
*/
var longestCommonSubsequence = function (text1, text2) {

    let m1 = text1.length;
    let m2 = text2.length;

    let dp = new Array(m1 + 1).fill(-1).map(() => new Array(m2 + 1).fill(-1));

    function helper(text1, text2, m, n, dp) {
        if (m == 0 || n == 0) return 0;

        if (dp[m][n] != -1) return dp[m][n]

        if (text1[m - 1] == text2[n - 1]) {
            return dp[m][n] = 1 + helper(text1, text2, m - 1, n - 1, dp)
        } else {
            return dp[m][n] = Math.max(helper(text1, text2, m - 1, n, dp), helper(text1, text2, m, n - 1, dp))
        }
    }

    return helper(text1, text2, m1, m2, dp);

}

//method 3
/*
 Time Complexity: O((mn))
*/
var longestCommonSubsequence = function (text1, text2) {

    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n]


}




let text1 = "abcde", text2 = "ace";
