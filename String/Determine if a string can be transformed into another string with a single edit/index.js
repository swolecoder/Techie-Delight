function checkEditDistance(str1, str2) {

    //if length id greater than 1 not possibkle

    let l1 = str1.length;
    let l2 = str2.length;

    if (Math.abs(l1 - l2) > 1) return false;

    let edits = 0;

    let i = 0;
    let j = 0;


    while (i < l1 && j < l2) {

        if (str1[i] != str2[j]) {

            if (l1 > l2) i++;
            if (l1 < l2) j++;

            if (l1 == l2) {
                i++;
                j++;
            }

            edits++;
        } else {
            i++;
            j++;
        }
    }


    if (i < l1) edits++

    if (j < l2) edits;

    return edits == 1
}

console.log(checkEditDistance("xyz", "xz") )
console.log(checkEditDistance("xyz", "xyyz"))
console.log(checkEditDistance("xyz", "xyx"))
console.log(checkEditDistance("xyz", "xxx"))