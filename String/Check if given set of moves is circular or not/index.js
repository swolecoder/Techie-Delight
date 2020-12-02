function checkCircularMove(str) {

    /*
        N
    W        E

        S

    */

    let x = 0;
    let y = 0;


    let dirs = "N";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        switch (char) {
            case "M": {
                if (dirs == "N") {
                    y++;
                } else if (dirs == "E") {
                    x++
                } else if (dirs == "W") {
                    x--
                } else if (dirs == "S") {
                    y--;
                }

                break;
            }

            case "L": {
                if (dirs == "N") {
                    dirs = "W"
                } else if (dirs == "E") {
                    dirs = "W"
                } else if (dirs == "W") {
                    dirs = "S"
                } else if (dirs == "S") {
                    dirs = "E"
                }

                break;
            }

            case "R": {
                if (dirs == "N") {
                    dirs = "E"
                } else if (dirs == "E") {
                    dirs = "S"
                } else if (dirs == "W") {
                    dirs = "N"
                } else if (dirs == "S") {
                    dirs = "W"
                }

                break;
            }


        }

    }
    if (!x && !y) return true;

    return false;
}

let str = "MMRMMRMMRMM";
console.log(checkCircularMove(str));
str = "MM";
console.log(checkCircularMove(str))