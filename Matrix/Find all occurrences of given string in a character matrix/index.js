function dfs(matrix, word) {

    let r = matrix.length;
    //  let c = matrix[0].length;


    let dirs = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ]

    let p = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            helper(i, j, 0, p)
        }
    }


    function helper(i, j, index, path) {

        if (matrix[i][j] != word[index]) return;

        if (index == word.length - 1) {
            for (let i = 0; i < path.length; i++) {
                console.log(`Data Found:${path[i]}`)
            }

            return;
        }


        path.push([i, j]);

        for (let i = 0; i < 8; i++) {
            let i1 = i + dirs[i][0];
            let j1 = j + dirs[i][1];

            if (matrix[i1]) {
                console.log("AIjskdpw", word[index], path, index)
                dfs(i1, j1, index + 1, path.slice())
            }
        }
        path.pop();


    }



}

let mat = [
    ['D', 'E', 'M', 'X', 'B'],
    ['A', 'O', 'E', 'P', 'E'],
    ['D', 'D', 'C', 'O', 'D'],
    ['E', 'B', 'E', 'D', 'S'],
    ['C', 'P', 'Y', 'E', 'N']
]

console.log(dfs(mat, "CODE"))