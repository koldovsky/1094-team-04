// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;


// function makeNegative(num) {
//     if (num > 0) {
//         return -1 * num
//     }
//     return num
// }

const makeNegative = num => (num > 0 ? -1 * num : num);

// function move(position, roll) {
//     return position + (roll * 2)
// }

const move = (position, roll) => position + (roll * 2);

// function greet(name, owner) {
//     if (name === owner) {
//         return 'Hello boss'
//     }
//     return 'Hello guest'
// }

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';


// function litres(time) {
//     return Math.floor(time * 0.5);
// }

const litres = time => Math.floor(time * 0.5);

// function lovefunc(flower1, flower2) {
//     if (flower1 % 2 != flower2 % 2) {
//         return true;
//     }
//     return false;
// }

const lovefunc = (flower1, flower2) => flower1 % 2 != flower2 % 2;