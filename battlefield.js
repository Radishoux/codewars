

// Introduction
// There is a war and nobody knows - the alphabet war!
// The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them.

// Task
// Write a function that accepts battlefield string and returns letters that survived the nuclear strike.

// The battlefield string consists of only small letters, #,[ and ].
// The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters inside the shelter.
// The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect such scenario too often ;-P ).
// The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.


function alphabetWar(battlefield) {
  var alphabetical = 'abcdefghijklmnopqrstuvwxyz-';
  for (let i = 0; i < battlefield.length; i++) {
    if (battlefield[i] == "#") {
      var leftPower = 1;
      var rightPower = 1;
      battlefield[i] = '_';
      console.log(battlefield);
      for (var gauche = i - 1; gauche >= 0; gauche--) {
        if (alphabetical.indexOf(battlefield[gauche]) !== -1) {
          battlefield[gauche] = '_'
        } else if (battlefield[gauche] === ']') {
          if (leftPower === 1) {
            battlefield[gauche] = '_'
          }
          while (battlefield[gauche] !== '[' && gauche > 0) {
            gauche--;
          }
          if (leftPower === 1) {
            battlefield[gauche] = '_'
            leftPower = 0;
          }
        }
      }
      for (var droite = i + 1; droite < battlefield.length; droite++) {
        if (alphabetical.indexOf(battlefield[droite]) !== -1) {
          battlefield[droite] = '_'
        }
        else if (battlefield[droite] === '[') {
          if (rightPower === 1) {
            battlefield[droite] = '_'
          }
          while (battlefield[droite] !== ']' && droite < battlefield.length) {
            droite++;
          }
          if (rightPower === 1) {
            battlefield[droite] = '_'
            rightPower = 0;
          }
        }
      }
    }
  }
  return battlefield.replace(/\[/g, '').replace(/\]/g, '').replace(/_/g, '');
}


console.log(alphabetWar("ab#de[fgh]ijk")); // "fgh" (all letters outside die because there is a # )