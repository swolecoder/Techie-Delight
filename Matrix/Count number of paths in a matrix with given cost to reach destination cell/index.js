function helper(matrix, m, n , cost){

    if(cost < 0)return 0;

    if( m== 0 && n ==0){
      if(matrix[0][0] == cost){return 1;}
      return 0;
    }

    //first roww
    if(m ==0)return helper(matrix,0,n-1, cost-matrix[m][n])

    //first column
    if(n==0)return helper(matrix,m-1, 0, cost-matrix[m][n])

    return helper(matrix, m-1, n,cost -matrix[m][n]) + helper(matrix, m,n-1, cost-matrix[m][n])
  }


  let  mat = [
          [4, 7, 1, 6],
          [5, 7, 3, 9],
          [3, 2, 1, 2],
          [7, 1, 6, 3]
      ]

      cost = 25;

    let m = mat.length-1;
    let n = mat[0].length-1;
    console.log(helper(mat, m ,n , cost))