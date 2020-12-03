function postFixEval(str) {


    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!isNaN(char)) {
            stack.push(char)
        } else {

            let x = Number(stack.pop());
            let y = Number(stack.pop());
            switch (char) {
                case "+": {

                    stack.push(x + y);
                    break;


                }
                case "-": {
                    stack.push(x - y);

                    break;
                }
                case "*": {
                    stack.push(x * y);

                    break;
                }
                case "/": {

                    stack.push(x / y);
                    break;
                }
            }
        }

    }


    return stack.pop();
}
let exp = "138*+";
console.log(postFixEval(exp))