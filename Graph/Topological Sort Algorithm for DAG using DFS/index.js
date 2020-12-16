


function Graph(arr) {

    let map = {};

    for (let [a, b] of arr) {
        if (map[a] == undefined) {
            map[a] = [];
        }
        map[a].push(b)
    }
    return map;
}

//[ E: 4, D: 3, B: 2, C: 1, A: 0 ]
const visited = new Set();
const topNum = []
function dfs(node, map, n) {
    visited.add(node);

    if (map[node]) {
        for (let child of map[node]) {
            if (!visited.has(child)) {
                n = dfs(child, map, n)
            }
        }
    }

    topNum[node] = n;
    return n - 1;
}


let data = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "D"],
    ["D", "E"],
]

let a = Graph(data);
console.log(a)
dfs("A", a, 4)
console.log(topNum)
