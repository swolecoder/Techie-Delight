function rodCut(n)
{
	// base case
	if (n <= 1)
		return n;

	// rod of length n has at-least cost of n
	let maxValue = n;

	// one by one partition the given rod of length n into two parts of
	// length (1, n-1), (2, n-2), .... (n-1 , 1), (n, 0) and take maximum
	for (let i = 1; i <= n; i++)
		maxValue = Math.max(maxValue, i * rodCut(n - i));

	return maxValue;
}

console.log(rodCut())