/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

//Solution with Map
function findOddMap(A) {
  let storage = new Map();
  
  A.forEach(e=>{
    if (storage.has(e)) {
       storage.set(e,storage.get(e)+1);
    } else {
        storage.set(e,1);
    }
  });


    Array.from(storage.keys())
    .filter(e=>storage.get(e)%2!==0)
    .forEach(e=>console.log(e));
};


// Solution object
function findOdd(A) {
    let storage = {};
    
    A.forEach(e=>{
      if (storage.hasOwnProperty(e)) {
          storage[e] ++;
      } else {
          storage[e] = 1;
      }
    });
  
  
      Array.from(Object.keys(storage))
      .map(e=>Number(e))
      .filter(e=>storage[e]%2!==0)
      .forEach(e=>console.log(e));
  };



findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);