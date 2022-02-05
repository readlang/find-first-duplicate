function findFirstDuplicate(arr) {
  // type your code here

  // if (!arr[1]) {
  //   return(-1)
  // }
  for (let indexN = 1; indexN < arr.length; indexN++) {
    for (let indexX = 0; indexX < indexN; indexX++) {
      if (arr[ indexN ] === arr[ indexX ]  ) {
        return(arr[ indexN ])
      }
      
    }
    
  }
  return(-1)

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1]));

  
  console.log("");

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5,6,7,8,4,10]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Pseudocode:

look at each element of the array and examine the elements before it.

1. check if array is at least 2 length
if not, return -1
2. create a for loop that starts at N = index 1 (2nd element) and goes up to array.length-1

3. create a 2nd for loop that starts at X = index 0 and goes up to N -1 index

4. if array[x] === array[n] : return x

5. return -1


*/