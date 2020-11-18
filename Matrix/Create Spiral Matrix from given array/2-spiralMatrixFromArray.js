function matrix(n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let row = 0;
    let endRow = n - 1;
    let column = 0;
    let endColumn = n - 1;

    let val = 1;

    while (row <= endRow && column <= endColumn) {

        for (let i = column; i <= endColumn; i++) {
            matrix[row][i] = val++;
        }
        row++;

        for (let i = row; i <= endRow; i++) {
            matrix[endCoumn][i] = val++
        }

        endColumn--;



        if (column >= endColumn) {
            for (let i = endColumn; i >= 0; i--) {
                matrix[endRow][i] = val++;

            }

            endRow--;


        }

        if (row >= endRow) {

            for (let i = endColumn; i >= 0; i--) {
                matrix[i][column] = val++
            }

            row++

        }

    }

    return matrix;
}
