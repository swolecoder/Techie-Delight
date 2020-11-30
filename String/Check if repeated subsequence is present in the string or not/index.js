/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {

    function isPalindrone(s) {
        return s.split("").reverse().join("") == s;
    }

    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;

        if (map[s[i]] >= 3) return true
    }

    let temp = "";

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] >= 2) temp += s[i]
    }

    let palindroneCheck = isPalindrone(temp);

    if (palindroneCheck) return false;
    return true;
};

let str = 'XYBYAXB';
console.log(repeatedSubstringPattern(str));
str = 'XBXAXB';
console.log(repeatedSubstringPattern(str));
str = 'ABCA';
console.log(repeatedSubstringPattern(str));
//if its a palindrone and none of string has a more than 3 seqrwence retrunr false