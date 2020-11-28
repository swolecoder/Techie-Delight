//Naive solution
function palindroneChecker(str) {
    let low = 0;
    let high = str.length - 1;
    while (low <= high) {
        if (str[low] != str[high]) return false;
        low++;
        high--;
    }

    return true;

}

function isRotatedPalindrome(str) {
    let len = str.length;

    for (let i = 0; i < len; i++) {
        let modifiedString = str.slice(i) + str.slice(0, i);
        if (palindroneChecker(modifiedString)) {
            console.log(modifiedString)
            return true;
        }

    }

    return false;
}


function isRotatedPalindromeMethod2(str) {
    let concatedString = str + str;
    let len = concatedString.length;
    let result = ""

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 2; j++) {
            let start = i;
            let end = i + j;


            while (start >= 0 && end <= len && concatedString[start] == concatedString[end]) {
                start--;
                end++;
            }

            let l = start + 1
            let e = end;
            //only return if length is equal to str
            if (e - l == str.length && result.length < e - l) {
                console.log(str.slice(l, e))
                return true;
            }
        }
    }
    return false;
}


let str = "ABCDCBA";
console.log("Method1", isRotatedPalindrome(str));
console.log("Method2",isRotatedPalindromeMethod2(str));
str = "BAABCC";
console.log("Method1", isRotatedPalindrome(str));
console.log("Method2",isRotatedPalindromeMethod2(str));