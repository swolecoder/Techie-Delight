let print = console.log

function findPowerSet(arr) {

    let partial = [];
    let res = [];


    function helper(index) {
        if (index == arr.length) {
            res.push(partial.slice())
            return;
        }


        //include ;ast elment
        partial.push(arr[index]);
        helper(index + 1);
        partial.pop();
        helper(index + 1);
    }

    helper(0)

    return res;
}



function powerSetMethod2(arr) {

    let result = [];
    result.push([]);
    for (let i = 0; i < arr.length; i++) {
        let currentEle = arr[i];
        let len = result.length;

        for (let j = 0; j < len; j++) {
            let clone = result[j].slice();
            clone.push(currentEle);
            result.push(clone)
        }
    }

    return result;


}
print(findPowerSet([1, 2, 3]))