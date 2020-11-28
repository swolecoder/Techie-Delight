function LongestPalindromicSubstring(str) {
    let result = "";
    let len = str.length;

    if (!str) return result;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 2; j++) {
            let start = i;
            let end = i + j;

            while (start >= 0 && end <= len && str[start] == str[end]) {
                start--;
                end++;
            }

            let s = start + 1;
            let e = end;

            if ((e - s) > result.length) {
                console.log("Ashish")
                result = str.substring(s, e);
            }
        }
    }
    return result;

}


let str = "ABDCBCDBDCBBC";
console.log(LongestPalindromicSubstring(str))