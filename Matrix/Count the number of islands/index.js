
let matrix = [
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1]
]


function BFS(i, j) {

    let row = [-1, -1, -1, 0, 1, 0, 1, 1]
    let col = [-1, 1, 0, -1, -1, 1, 0, 1]

    let queue = [[i, j]];

    while (queue.length) {
        let [a, b] = queue.shift();
        matrix[a][b] = "#";
        for (let i = 0; i < 8; i++) {

            let a1 = a + row[i];
            let a2 = b + col[i];
            // not out of bound , is not water or no visted yet
            if (matrix[a1] && matrix[a1][a2] == 1) {

                queue.push([a1, a2])
            }
        }
    }
}





function main() {
    let row = matrix.length;
    let column = matrix[0].length;

    let count = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {

            if (matrix[i][j] == 1 && matrix[i][j] != "#") {
                // console.log("I am alq")
                BFS(i, j)
                count++
            }
        }
    }

    return count;
}

console.log(main())