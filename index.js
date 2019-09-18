const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];// add solution here
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i += 1) {
    array.push(musicians[i] +" plays " + instruments[i])
  }
  
  return array
}

function JohnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]
  var factsExclamation = []
  
  for (var i = 0; i < facts.length; i += 1) {
    var fact = facts[i]
    factsExclamation.push(fact + "!!!")
  }
  
  return factsExclamation
}