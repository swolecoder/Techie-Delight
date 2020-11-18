
// // Time complexity : O(m*n *(m +n))
function convert(matrix) {

    let r = matrix.length;
    let c = matrix[0].length;


    function transformZero(row, column) {
        //do for row: 0 -> -1
        for (let i = 0; i < r; i++) {
            if (matrix[i][column] != 0) matrix[i][column] = -1;
        }
        //do for column: 0 -> -1
        for (let i = 0; i < c; i++) {
            if (matrix[row][i] != 0) matrix[row][i] = -1;
        }

    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] == 0) {
                //convert
                transformZero(i, j)
            }
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] == -1) {
                //convert
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

//time complexity " O(m*n)"
function convertMethod2(matrix) {

    let rowFlag = false;
    let colFlag = false;
    console.log(matrix)

    let r = matrix.length ;
    let c = matrix[0].length ;

    for (let j = 0; j < r; j++) {
        if (!matrix[0][j]) {
            rowFlag = true;
            break;
        }
    }


    // scan first column for any 0's
    for (let i = 0; i < matrix[0].length; i++) {
        if (!matrix[i][0]) {
            colFlag = true;
            break;
        }
    }



    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }


    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (!matrix[0][j] || !matrix[i][0]) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(colFlag, rowFlag)
    if (rowFlag) {
        for (let i = 0; i < r; i++) {
            matrix[i][0] = 0;
        }
    }
    if (colFlag) {

        for (let i = 0; i < c; i++) {
            matrix[0][i] = 0;
        }
    }

    return matrix;

}









let a = [
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
];
//console.log(convert(a));

let b = [
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
];
console.log(convertMethod2(b))

/*
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0 ]
]

*/