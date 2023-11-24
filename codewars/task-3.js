// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
   findSmallestInt(args) {
      let minValue = args[0];
      for (let i = 1; i < args.length; i++) {
         args[i] < minValue ? (minValue = args[i]) : minValue;
      }
      return minValue;
   }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) => 2 * circle.radius * Math.PI;

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
   const fives = [];
   for (let five in obj) {
      if (obj.hasOwnProperty(five)) {
         if (typeof five === "string" && five.length === 5) {
            fives.push(five);
         }
         if (typeof obj[five] === "string" && obj[five].length === 5) {
            fives.push(obj[five]);
         }
      }
   }
   return fives;
}
