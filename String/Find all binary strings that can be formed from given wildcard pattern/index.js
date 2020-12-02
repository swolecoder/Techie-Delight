function printAllCombinations(str) {

    let queue = [str];
    let result = [];

    while (queue.length) {
        let data = queue.shift();

        let findIndexOfQues = data.indexOf("?");
        if (findIndexOfQues > -1) {
            for (let i = 0; i < 2; i++) {
                let str = data.split("")
                str[findIndexOfQues] = i;
                queue.push(str.join(""))
            }

        } else {
            //if never found push top result
            result.push(data)
        }
    }

    return result;
}


let str = "1?11?00?1?";

console.log(printAllCombinations(str));
