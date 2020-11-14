


function floydWarshall(matrix) {

    let N = matrix.length;

    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
            }
        }
    }

    return matrix;


}




let M = Infinity;
let adjMatrix = [
    [0, M, -2, M],
    [4, 0, 3, M],
    [M, M, 0, 2],
    [M, -1, M, 0]
];

console.log(floydWarshall(adjMatrix))
