export default function fight(character, monster) {
  let result = "";
  let monsterHp = parseInt(monster.hitPoints);
  let monsterAtk = parseInt(monster.attack);
  let characterHp = parseInt(character.hitPoints);
  let characterAtk = parseInt(character.attack);
  for (let i = 0; i < monsterHp; i++){
    monsterHp = monsterHp - characterAtk;
    characterHp = characterHp - monsterAtk;
  }

  if (monsterHp <= 0 && characterHp > 0){
    result = "you won";
  }
  else {
    result = "you lost";
  }
  
  let resultMessage = document.createElement("li");
  resultMessage.innerText = result;
  document.getElementById("resultArea").append(resultMessage);

  return result;
  
  
}
// .