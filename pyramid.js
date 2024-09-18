function patternPyramid(n) {
  let i, j;

  for (i = 1; i <= n; i++) {
    let pattern = " ";

    for (j = 0; j < n; j++) {
      //pattern = pattern.concat("*");
      if (j < n - i) {
        pattern = pattern.concat(" ");
      } else {
        pattern = pattern.concat("* ");
      }
    }
    console.log(pattern);
  }
}

patternPyramid(5);

//    *                                     i=1;i<5,2
//j=0;j<2;1     *
// * *
//* * *
//* * * *
//* * * * *
