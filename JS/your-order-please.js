/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/




function order(words){
 return words.split(" ").reduce((acc,curr)=>{
    let position = findNumber(curr);
    acc[position-1]=curr;
    return acc;
  },[]).join(" ");


  function findNumber(word) {
      const nums = ['1','2','3','4','5','6','7','8','9'];  
      for (let i=0;i<=word.length-1;i++) {
         if (nums.includes(word.charAt(i))) {
             return Number(word.charAt(i));
         } 
      }
      return -1;
  }

}



