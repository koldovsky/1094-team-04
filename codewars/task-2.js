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
