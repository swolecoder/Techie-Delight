function count(matrix) {
  //start from top left
    let r = 0;
    let c = matrix[0].length - 1;

    let ans = 0;

    while (r <= matrix.length && c >= 0) {

        if (matrix[r][c] < 0) {
            ans += c + 1;
            r++;

        } else {
            c--;
        }
    }

    return ans;
}


let mat = [
    [-7, -3, -1, 3, 5],
    [-3, -2, 2, 4, 6],
    [-1, 1, 3, 5, 8],
    [3, 4, 7, 8, 9]
];

console.log(count(mat))