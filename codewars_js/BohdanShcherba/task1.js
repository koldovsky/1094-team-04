//https://www.codewars.com/kata/55f73be6e12baaa5900000d4//
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102//  
function makeNegative(num) {
    if(num>0){
      return -num;
    } else{
      return num;
    }
}
//https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/javascript//
function move (position, roll) {
    // return the new position
    return position+(2*roll)
  }
//https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript//
  function greet (name, owner) {
    // Add code here
    if(name===owner){
      return 'Hello boss';
    }{ return 'Hello guest'}
  }
//https://www.codewars.com/kata/582cb0224e56e068d800003c/javascript//
  function litres(time) {
    if(time>0){
      time=Math.floor(time/2)
    } else{
      time=0
    }
    return time;
  }
//https://www.codewars.com/kata/555086d53eac039a2a000083/javascript//
  function lovefunc(flower1, flower2){
    if(flower1%2==true && flower2%2==false || flower1%2==false && flower2%2==true){
      return true
    }{return false}
  }