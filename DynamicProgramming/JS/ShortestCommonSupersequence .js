//https://www.techiedelight.com/shortest-common-supersequence-finding-scs/

/*





*/


function ShortestCommonSupersequence(str1, str2) {

    let len1 = str1.length;
    let len2 = str2.length;


    function helper(s1, s2, m1, n1) {

        if (m1 == 0 || n1 == 0) return m1+n1;

        if (s1[m1 - 1] == s2[n1 - 1]) {
            return helper(s1, s2, m1 - 1, n1 - 1) + 1;
        }


        return Math.min(helper(s1, s2, m1 - 1, n1) + 1, helper(s1, s2, m1, n1 - 1) + 1)
    }

    return helper(str1, str2, len1, len2)



}

let X = "ABCBDAB", Y = "BDCABA";
console.log(ShortestCommonSupersequence(X, Y))