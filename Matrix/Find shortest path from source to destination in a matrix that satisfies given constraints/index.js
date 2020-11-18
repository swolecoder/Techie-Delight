function findPath(matrix) {

    let dirs = [[-1, 0], [0, -1], [0, 1], [1, 0],];//directions

    let queue = [[0, 0, 0]];

    let set = new Set();
    let key = `${0},${0}`
    set.add(key)
    while (queue.length) {

        let data = queue.shift();
        let x1 = data[0];
        let y1 = data[1];

        if (x1 == matrix.length - 1 && y1 == matrix[0].length - 1) {
            return data[2];
        }
        let currentCellVal = matrix[x1][y1];
        for (let i = 0; i < 4; i++) {

            let x = x1 + currentCellVal * dirs[i][0]
            let y = y1 + currentCellVal * dirs[i][1];

            //check if its valid , x >0 , y > 0 x <= row and y <= column
            if (matrix[x]) {
                let key = `${x},${y}`
                if (!set.has(key)) {
                    set.add(key);
                    queue.push([x, y, data[2] + 1]);
                }
            }
        }
    }


    return null;
}


let a = [
    [4, 4, 6, 5, 5, 1, 1, 1, 7, 4],
    [3, 6, 2, 4, 6, 5, 7, 2, 6, 6],
    [1, 3, 6, 1, 1, 1, 7, 1, 4, 5],
    [7, 5, 6, 3, 1, 3, 3, 1, 1, 7],
    [3, 4, 6, 4, 7, 2, 6, 5, 4, 4],
    [3, 2, 5, 1, 2, 5, 1, 2, 3, 4],
    [4, 2, 2, 2, 5, 2, 3, 7, 7, 3],
    [7, 2, 4, 3, 5, 2, 2, 3, 6, 3],
    [5, 1, 4, 2, 6, 4, 6, 7, 3, 7],
    [1, 4, 1, 7, 5, 3, 6, 5, 3, 4]
];
console.log(findPath(a))