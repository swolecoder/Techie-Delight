function findPaths(matrix) {

    let r = matrix.length-1;
    let c = matrix[0].length - 1;


    let result = [];

    function helper(i, j, matrix, currentPath) {

        if (i == r  && j == c ) {
            currentPath.push(matrix[i][j]);
            result.push(currentPath.slice());
            currentPath.pop();
            return
        }

        currentPath.push(matrix[i][j]);

        if (matrix[i] && matrix[i, j + 1]) {
            helper(i, j + 1, matrix, currentPath);
        }

        if (matrix[i+1] && matrix[i+1, j]) {
            helper(i+1, j, matrix, currentPath);
        }

        currentPath.pop();


    }
    helper(0, 0, matrix, [])

    return result;

}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(findPaths(matrix))