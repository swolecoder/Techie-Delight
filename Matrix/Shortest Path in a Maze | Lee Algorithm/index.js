function helper(matrix, x, y, x1, y1) {

    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let queue = [[x, y, 0]];
    let set = new Set();

    while (queue.length) {

        let [a, b, dis] = queue.shift();

        if (a == x1 && b == y1) {
            return dis;
        }

        //add to set
        set.add(`${a}${b}`);

        for (let i = 0; i < 4; i++) {
            let a1 = a + dirs[i][0];
            let b1 = b + dirs[i][1];

            if (a1 >= 0 && a1 < matrix.length && b1 >= 0 && b1 < matrix[0].length) {
                if (!set.has(`${a1}${b1}`)) {
                    queue.push([a1, b1, dis + 1])
                }
            }
        }

    }

    return -1;
}

let mat = [
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1]
]

console.log(helper(mat, 0, 0, 7, 5))