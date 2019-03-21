function theBeatlesPlay(musician,instrument){
  var emptyarray = [];
  for(var i = 0; i < musician.length; i++){
    var text = musician[i] +" plays "+instrument[i];
    emptyarray.push(text);
  }
  return emptyarray;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] = facts[i]+"!!!";
  }
  console.log(facts);
 return facts;
}

function iLoveTheBeatles(n){
  var array = [];
  var i = 0;
  do{array.push("I love the Beatles!"); 
  i++;
  }
  while (i < 15 - n);
  console.log(array);
  return array;
}