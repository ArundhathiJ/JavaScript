function removeDuplicate(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isPresent = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] == uniqueArray[j]) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      uniqueArray[uniqueArray.length] = arr[i];
    }
  }
  console.log(uniqueArray);
}
removeDuplicate([10, 20, 5, 3, 2, 19, 21, 20]);

// arr = [10, 20, 5, 3, 2, 19, 21, 20];
// uniqueArray = [10];
