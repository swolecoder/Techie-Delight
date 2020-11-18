/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let r = 0;
    let endRow = matrix.length - 1;
    let c = 0;
    let endColumn = matrix[0].length - 1;

    let result = [];

    while (r <= endRow && c <= endColumn) {
        for (let i = c; i <= endColumn; i++) {
            result.push(matrix[r][i])
        }

        r++;



        for (let i = r; i <= endRow; i++) {
            result.push(matrix[i][endColumn])
        }

        endColumn--;


        if (r <= endRow) {
            for (let i = endColumn; i >= c; i--) {
                result.push(matrix[endRow][i])

            }

            endRow--;
        }

        if (c<= endColumn) {
            for (let i = endRow; i >= r; i--) {
                result.push(matrix[i][c])

            }
            c++
        }


    }



    return result

}

