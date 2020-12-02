function isIsomorphic(str1, str2) {

    let map = {};
    let set = new Set();

    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        let a = str1[i], b = str2[i];

        if ((a in map)) {

            let data = map[a];
            if (data != b) return false;
        } else {

            //its already mapped top something
            if(set.has(b)) return false;
            //add
            map[a] = b;
            set.add(b)
        }
    }
    return true;

}

let X = "ab",
     Y = "ca";
     console.log(isIsomorphic(X,Y))