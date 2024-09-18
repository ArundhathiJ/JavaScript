function palindrome(str){
  let reverse="";
  for(char of str){
    reverse=char+reverse
  }
  if(str==reverse){
    return true;
  }
  else{
    return false;
  }
}palindrome("abcdef");












// str="abcdefg"

// char='a'
// reverse='a'

// char='b'
// reverse=char+reverse='ba';

// char='c'
// reverse=char+reverse='cba'



