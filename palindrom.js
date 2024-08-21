function palindrom(number) {
  let newnumber = number;
  let reverse;
  while (number != 0) {
    reverse = reverse * 10 + (number % 10);
    number = number / 10;
  }
  if (newnumber == reverse) return true;
  else return false;
}

let n = 123;
if (palindrom(n) == true) console.log("palindrom");
else console.log("not a palindrom");

if (palindrom(n) == true) console.log(n + 5);
else console.log(n - 5);

// /number=879
// reverse=9
// number=87

// number=87
// reverse=reverse*10+number%10=97
// number=8

// number=8
// reverse=97*10+8%10=978
// number=8/10=0

// number=0
