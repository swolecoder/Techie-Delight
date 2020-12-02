function getColumnName(n) {
    //AA -> 1 + 26 + 1

    let res = []
    while (n > 0) {

        let index = (n - 1) % 26;

        let data = String.fromCharCode(97 + index);
        res.unshift(data.toUpperCase());

        n = (n - 1) / 26;
    }
    return res.join("")
}

console.log(getColumnName(878));
console.log(getColumnName(181))