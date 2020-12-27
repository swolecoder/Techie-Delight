function helper(matrix, m , n, cost ){

    let row = matrix.length
    let column = matrix[0].length;
    let data = new Array(row).fill(0)
    .map(()=> new Array(column).fill(0));

    data[0][0] = matrix[0][0]


    for(let i=1; i < row; i++) data[0][i] = matrix[0][i] + data[0][i-1]

    for(let i=1; i < column; i++) data[i][0] = matrix[i][0] + data[i-1][0]

    for(let i=1; i < row; i++){
      for(let j= 1;  j < column ; j++){
        data[i][j] = matrix[i][j] + Math.min(data[i-1][j], data[i][j-1])
      }
    }

    return data[row-1][column-1]
    }


    let   matrix = [
            [4, 7, 8, 6, 4],
            [6, 7, 3, 9, 2],
            [3, 8, 1, 2, 4],
            [7, 1, 7, 3, 7],
            [2, 9, 8, 9, 3]
        ];
      let m = matrix.length-1;
      let n = matrix[0].length -1;
      console.log(helper(matrix, m , n ));