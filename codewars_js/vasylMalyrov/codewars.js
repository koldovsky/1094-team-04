// https://www.codewars.com/kata/55f73be6e12baaa5900000d4 //
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return result;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102 //
function makeNegative(num) {
    if (num > 0) {
        return num - num - num;
    } else if (num === 0) {
        return num;
    } else
        return num;
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2 //
function move(position, roll) {
    return position + (2 * roll);
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7 //
function greet(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } return "Hello guest";
}

// https://www.codewars.com/kata/582cb0224e56e068d800003c //
function litres(time) {
    return Math.floor(time * 0.5);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083 //
function lovefunc(flower1, flower2) {
    let Timmy = flower1 % 2;
    let Sarah = flower2 % 2;
    if ((Timmy === 0) && (Sarah === 1)) {
        return true;
    } else if ((Timmy === 1) && (Sarah === 0)) {
        return true;
    } else {
        return false;
    }
}