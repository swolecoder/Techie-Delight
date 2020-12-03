function decode(str) {

    let res = "";
    let stack = [];

    for (let i = 0; i <= str.length; i++) {

        stack.push(i + 1);

        if (i == str.length || str[i] == "I") {
            console.log(stack)
            while (stack.length) {
                res +=  stack.pop();;
            }
        }
    }

    return res;
}

let seq = "IDIDII";
console.log(decode(seq))