
function isConnected(edges, src, des) {


    //construct a adj matrix first
    let map = {};
    for (let [a, b] of edges) {

        if (map[a] == undefined) {
            map[a] = [];
        }
        map[a].push(b)
    }

    console.log(map)

    let queue = [src];
    let seen = new Set();

    while (queue.length) {

        let data = queue.shift();

        if (data == des) {
            console.log("Found");
            return true
        }

        if (seen.has(data)) continue;

        seen.add(data);
        if (map[data]) {
            for (let child of map[data]) {
                if (!seen.has(child)) {
                    queue.push(child)
                }
            }

        }

    }
    console.log("Not found")
    return false;
}

//print all paths

function print(edges, src, des) {
    let map = {};
    for (let [a, b] of edges) {

        if (map[a] == undefined) {
            map[a] = [];
        }
        map[a].push(b)
    }

    let seen = new Set();
    let result = [];

    helper(src, des, [])

    return result
    function helper(src, des, current) {

        seen.add(src);

        if (src == des) {
            current.push(des)
            result.push(current.slice());
           return true;
        }

        //push current data
        current.push(src);

        if (map[src]) {
            for (let child of map[src]) {
                if (!seen.has(child)) {
                    helper(child, des, current)
                }
            }
        }


        //remove current node from path
        current.pop();
        return false;

    }


}







let edges = [
    [0, 3], [1, 0], [1, 2], [1, 4], [2, 7], [3, 4],
    [3, 5], [4, 3], [4, 6], [5, 6], [6, 7]
];

console.log(print(edges, 0, 7))