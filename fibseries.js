function fibonacciSeries(limit) {
  let fib = [];
  for (let i = 0; i < limit; i++) {
    if (i < 2) fib.push(i);
    else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}
console.log(fibonacciSeries(10));

//i = 5;
//[0, 1,1,2,3,5];

