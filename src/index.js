import fight from './../src/fight.js';
import Monster from './../src/Monster.js';
import Character from './../src/Character.js';

//display selected 
function showChar(myCharacter){
  let newChar = document.createElement("li");
  newChar.innerText =  "My Character";
  document.getElementById("showChar").append(newChar);
  
  let newCharType = document.createElement("li");
  newCharType.innerText =  "Type: " + myCharacter.type.toString();
  document.getElementById("showChar").append(newCharType);

  let newCharAttribute = document.createElement("li");
  newCharAttribute.innerText =  "Attribute: " + myCharacter.attribute.toString(); 
  document.getElementById("showChar").append(newCharAttribute);

  let newCharHp = document.createElement("li");
  newCharHp.innerText =  "Hit Points: " + myCharacter.hitPoints.toString();
  document.getElementById("showChar").append(newCharHp);

  let newCharAtk = document.createElement("li");
  newCharAtk.innerText =  "Attack: " + myCharacter.attack.toString();
  document.getElementById("showChar").append(newCharAtk);
}

function showMonst(myEnemy){
  let newMonst = document.createElement("li");
  newMonst.innerText =  "My Enemy";
  document.getElementById("showMonst").append(newMonst);

  let newMonstName = document.createElement("li");
  newMonstName.innerText =  "Name: " + myEnemy.name.toString();
  document.getElementById("showMonst").append(newMonstName);

  let newMonstHp = document.createElement("li");
  newMonstHp.innerText =  "Hit Points: " + myEnemy.hitPoints.toString();
  document.getElementById("showMonst").append(newMonstHp);

  let newMonstAtk = document.createElement("li");
  newMonstAtk.innerText =  "Attack: " + myEnemy.attack.toString();
  document.getElementById("showMonst").append(newMonstAtk);
}



//character select section
function charSubmit(event){
  event.preventDefault();
  let choseType =  document.querySelector(".charBuilder select option:checked").value;
  console.log(choseType);
  if (choseType === "warrior") {
    let myCharacter = new Character("warrior", "strength", 5, 5);
    showChar(myCharacter);
  }
  else if (choseType === "mage"){
    let myCharacter = new Character("mage", "wisdom", 3, 7);
    showChar(myCharacter);
  }
  else if (choseType === "rogue"){
    let myCharacter = new Character("rogue", "intellect", 4, 6);
    showChar(myCharacter);
  }
  else {
    console.log("PLEASE CHOOSE A CHARACTER!");
  }
}

function monstSubmit(event){
  event.preventDefault(event);
  let choseMonster =  document.querySelector(".monsterForm select option:checked").value;
  console.log(choseMonster);
  if (choseMonster === "goblin") {
    let myEnemy = new Monster("Goblin", 5, 2);
    showMonst(myEnemy);
  }
  else if (choseMonster === "troll"){
    let myEnemy = new Monster("Troll", 10, 3);
    showMonst(myEnemy);
  }
  else if (choseMonster === "demon"){
    let myEnemy = new Monster("Demon", 15, 5);
    showMonst(myEnemy);
  }
  else {
    console.log("PLEASE CHOOSE A MONSTER!");
  }
}

window.addEventListener("load", () => {
  const charForm = document.getElementById("charBuilder");
  const monstForm = document.getElementById("monsterForm");
  charForm.addEventListener("submit", (event) => {
    event.preventDefault();
    charSubmit(event);
  });
  monstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    monstSubmit(event);
  });
});