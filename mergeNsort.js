function sortTwoArray(arr1, arr2) {
  let newarray = [];

  for (let i = 0; i < arr1.length; i++) {
    newarray[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    newarray[newarray.length] = arr2[i];
  }
  for (let i = newarray.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (newarray[j] > newarray[j + 1]) {
        let temp;
        temp = newarray[j + 1];
        newarray[j + 1] = newarray[j];
        newarray[j] = temp;
      }
    }
  }
  console.log(newarray);
}
sortTwoArray([15, 10, 3, 7, 20], [5, 9, 12, 2, 22]);
// arr1=[15,10,3,7,20]
// arr2=[5,9,12,2,22]

// newarray=[15];
// newarray=[15,10];
// -
// -
// -
// newarray=[15,10,3,7,20,5,9,12,2,22];
