function duplicateparenthesis(str) {


    let stack = [];
    if (!str) return true;


    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char != ")") {
            stack.push(char)
        } else {

            if (stack[stack.length - 1] == "(") {
                return true;
            }

            while (stack[stack.length - 1] != "(") {
                stack.pop();
            }

            stack.pop();
        }
    }

    return false;


}


let exp = "((x+y))";
console.log(duplicateparenthesis(exp))
exp = "(x+y)";
console.log(duplicateparenthesis(exp))
console.log(duplicateparenthesis("((a+b)+((c+d)))"))
console.log(duplicateparenthesis("(((a+(b)))+(c+d))"))
console.log(duplicateparenthesis("(((a+(b))+c+d))"))
console.log(duplicateparenthesis("((a+b)+(c+d)) "))
console.log(duplicateparenthesis("((a+(b))+(c+d))"))