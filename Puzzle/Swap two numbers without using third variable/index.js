function swap(x, y) {
    if (x == y) return;

    x = x + y;
    y = x - y;
    x = x - y;

    return {
        x, y
    }
}

console.log(swap(3,4))