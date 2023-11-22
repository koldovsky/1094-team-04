// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = string => string.split(" ");

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = dna => dna.replace(/T/gi, "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = list => Math.min(...list);
const max = list => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  }
  return arr.indexOf(minValue);
}





//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const wolfIndex = queue.findIndex(animal => animal === 'wolf');
  
  if (wolfIndex === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
  } else {
      const sheepNumber = queue.length - 1 - wolfIndex;
      return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}

//https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(arr) {
  return arr.map(num => num * 2);
}

https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}