// task 1 
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

//task 2
function makeNegative(num) {
    if(num>0){
      return -num;
    } else{
      return num;
    }
}

//task 3
function move (p, r) {
    return p + (2 * r)
  }

//task 4
function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss';
    }
    return 'Hello guest';
  }

//task 5
function litres(time) {
    return Math.floor(time * 0.5);
  }

//task6
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }