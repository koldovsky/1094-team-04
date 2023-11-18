function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

function makeNegative(num) {
    if (num > 0) {
        return -1 * num
    }
    return num
}

function move(position, roll) {
    return position + (roll * 2)
}

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    }
    return 'Hello guest'
}

// function litres(time) {
//     return time / 0.5;
// }

// console.log(litres(4));


