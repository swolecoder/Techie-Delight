function findSubmatrixSum(matrix, r1, c1, r2, c2) {

    let row = matrix.length;
    let column = matrix[0].length;
    let sumMatrix = new Array(row).fill(0).map(() => new Array(column).fill(0))

    sumMatrix[0][0] = matrix[0][0];

    //populate first row
    for (let i = 1; i < column; i++) {
        sumMatrix[0][i] = sumMatrix[0][i - 1] + matrix[0][i]
    }

    //populate first column
    for (let i = 1; i < column; i++) {
        sumMatrix[i][0] = sumMatrix[i - 1][0] + matrix[i][0]
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            sumMatrix[i][j] = sumMatrix[i - 1][j] + sumMatrix[i][j - 1] + matrix[i][j] - sumMatrix[i - 1][j - 1]
        }
    }

    let result = sumMatrix[r2][c2];

    if (c1 > 0) result -= sumMatrix[r2][c1 - 1];
    if (r1 > 0) result -= sumMatrix[r1 - 1][c2];

    if (r1 > 0 && c1 > 0) {
        result += sumMatrix[r1 - 1][c1 - 1]
    }



    console.log(sumMatrix, result)

}

let mat = [
    [0, 2, 5, 4, 1],
    [4, 8, 2, 3, 7],
    [6, 3, 4, 6, 2],
    [7, 3, 1, 8, 3],
    [1, 5, 7, 9, 4]
];
let p = q = 1
r = s = 3;
console.log(findSubmatrixSum(mat, p, q, r, s))

