function checkToepliz(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;


    for (let i = 0; i < r - 1; i++) {
        for (let j = 0; j < c - 1; j++) {
            if (matrix[i][j] != matrix[i + 1][j + 1]) return false;
        }
    }

    return true;
}


let matrix = [
    [3, 7, 0, 9, 8],
    [5, 3, 7, 0, 9],
    [6, 5, 3, 7, 0],
    [4, 6, 5, 3, 7]
];
console.log(checkToepliz(matrix))