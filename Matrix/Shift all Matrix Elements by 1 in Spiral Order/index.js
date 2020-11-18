
function ShiftMatrix(matrix) {
    let row = 0;
    let rowEnd = matrix.length - 1;

    let column = 0;
    let columnEnd = matrix[0].length - 1;

    let prev = matrix[0][0];

    while (row <= rowEnd && column <= columnEnd) {

        for (let i = column; i <= columnEnd; i++) {
            let temp = matrix[row][i];
            matrix[row][i] = prev;
            prev = temp;
        }
        row++;

        for (let i = row; i <= rowEnd; i++) {
            let temp = matrix[i][columnEnd];
            matrix[i][columnEnd] = prev;
            prev = temp;
        }

        columnEnd--;

        if (row <= rowEnd) {
            for (let i = columnEnd; i >= column; i--) {
                let temp = matrix[rowEnd][i];
                matrix[rowEnd][i] = prev;
                prev = temp;
            }

            rowEnd--;
        }


        if (columnEnd >= column) {
            for (let i = rowEnd; i >= row; i--) {
                let temp = matrix[i][column];
                matrix[i][column] = prev;
                prev = temp;
            }

            column++;
        }
    }

    matrix[0][0] = prev;

    return matrix;
}











let a = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
];

console.log(ShiftMatrix(a))