function findAngle(hour, min) {
// find position of hour's hand
    let h = hour * (360 / 12) + min * (360 / (12 * 60));
    // find position of min's hand
    let m = min * (360 / 60);

    let diff = Math.abs(h - m);
    let res = Infinity;

    if (diff > 180) {
        res = 360 - diff
    }

    return res == Infinity ? diff : res;
}