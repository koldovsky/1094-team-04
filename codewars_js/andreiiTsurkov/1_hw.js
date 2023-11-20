// 1 Messi Goals //
// Andrii Tsurkov
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;


// 2 Make negative //
// Andrii Tsurkov
const makeNegative = num => num > 0 ? -1 * num : num;


// 3 Game Move //
// Andrii Tsurkov
const move = (position, roll) => position + (roll * 2);


// 4 Personalized Message //
// Andrii Tsurkov
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';


// 5 Keep Hydrated //
// Andrii Tsurkov
const litres = time => Math.floor(time * 0.5);


// 6 Opposites Attract //
// Andrii Tsurkov
const lovefunc = (flower1, flower2) => flower1 % 2 != flower2 % 2;



