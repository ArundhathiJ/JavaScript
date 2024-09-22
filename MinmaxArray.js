function minMaxArray(arr) {
  let max = arr[0];
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min, max);
}
minMaxArray([10, 20, 25, 40, 32, 3]);

// arr=[10,20,25,40,32,3];
// 1.assume max and min as the first element of the array
// 2.Iterate through each element of the  Array
// 3.compare element > max set max=element
// 4.compare element<min set min=element
// 5.repeat 3 and 4 until the end of the Array elements
