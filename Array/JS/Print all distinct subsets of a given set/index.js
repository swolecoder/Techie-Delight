function findPowerSet(array) {

    let set = new Set();

    let res = [];
    res.push([]);

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let len = res.length;

        for (let k = 0; k < len; k++) {
            let copy = res[k].slice();
            copy.push(current);

            if (!set.has(copy.join(""))) {
                set.add(copy.join(""));
                res.push(copy);
            }


        }
    }

    return res;
}


function powerSetMethod23(array) {


    let res = [[]];

    let start = 0;
    let end = 0;

    for (let i = 0; i < array.length; i++) {

        let current = array[i];

        start = 0;

        if (i > 0 && array[i] == array[i - 1]) {
            start = end + 1;
        }
        end = res.length - 1

        for (let j = start; j <= end; i++) {

            let data = res[j].slice(0);
            data.push(current);

            res.push(data)
        }


    }


    return res;

}

console.log(findPowerSet(['x', 'y', 'x']));
console.log(powerSetMethod23(['x', 'y', 'x']))