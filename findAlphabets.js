function findAlphabets(str) {
  let arr = [];
  for (char of str) {
    if (arr.indexOf(char.toLowerCase()) == -1 && /[a-zA-Z]/.test(char)) {
      arr.push(char);
    }
  }
  console.log(arr);
}
findAlphabets("my name is Arundhathi");

//str = "my name is Arundhathi";
