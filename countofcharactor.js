function countCharactor(str){
  let countOfChar={};
  for(char of str){
    if(Object.hasOwn(countOfChar,char)){
      countOfChar[char]+=1;
    }
    else{
      countOfChar[char]=1;
    }
  }
  console.log(JSON.stringify(countOfChar));
}
countCharactor("arundhathi");




// str="amal";
// countCharactor={};

// char=a;
// countCharactor={a:1};

// char=m;
// countCharactor={a:1,m:1};

// char=a;
// countCharactor={a:2,m:1};

// char=l;
// countCharactor={a:2,m:1,l:1};

