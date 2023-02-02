import fight from './../src/fight.js';
import Monster from './../src/Monster.js';
import Character from './../src/Character.js';

function charSubmit(event){
  event.preventDefault();
  let choseType =  document.querySelector(".charBuilder select option:checked").value;
  console.log(choseType);
  if (choseType === "warrior") {
    let myCharacter = new Character("warrior", "strength", 5, 5);
    console.log(myCharacter);
  }
  else if (choseType === "mage"){
    let myCharacter = new Character("mage", "wisdom", 3, 7);
    console.log(myCharacter);
  }
  else if (choseType === "rogue"){
    let myCharacter = new Character("rogue", "intellect", 4, 6);
    console.log(myCharacter);
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
    console.log(myEnemy);
  }
  else if (choseMonster === "troll"){
    let myEnemy = new Monster("Troll", 10, 3);
    console.log(myEnemy);
  }
  else if (choseMonster === "demon"){
    let myEnemy = new Monster("Demon", 15, 5);
    console.log(myEnemy);
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