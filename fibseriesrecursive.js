function fibonacciSeries(limit){
  let fib=[];
  if(limit<=1){
    return limit;
  }
  return fibonacciSeries(limit-1)+fibonacciSeries(limit-2);
  
}
for(i=0;i<=6;i++)
{
let result=fibonacciSeries(i);
console.log(result);
}