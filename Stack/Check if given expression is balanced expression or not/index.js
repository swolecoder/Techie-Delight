function balParenthesis(string) {


    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }


    let stack = [];

    for (let char of string) {
        if (char in map) {
            stack.push(char)
        } else {
            let lastData = stack.pop();

            if (map[lastData] !== char) {
                return false;
            }

        }
    }

    if (stack.length != 0) return false;

    return true;
}

let str = "{()}[{}]"
console.log(balParenthesis(str))
str = "{()}[{}"
console.log(balParenthesis(str))