function sorting(numbers) {
  for (let i = numbers.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  console.log(numbers);
}
sorting([10, 5, 7, 3, 15]);

// 10,5,7,3,15;

// number[0]>number[1] swap(number[0],number[1]);
// 5,10,7,3,15;
// number[1]>number[2] swap(number[1],number[2]);
// 5,7,10,3,15;
// number[2]>number[3] swap(number[2],number[3]);
// 5,7,3,10,15
// number[3]>number[4]
// 5,7,3,10,15

// // number[0]>number[1]
// // 5,7,3,10,15
// // number[1]>number[2] swap(number[1],number[2])
// // 5,3,7,10,15
// // number[2]>number[3]
// // 5,3,7,10,15

// number[0]>number[1] swap(number[0,number[1]])
// 3,5,7,10,15
// number[1]>number[2]

// number[0]>number[1]
// 3,5,7,10,15
