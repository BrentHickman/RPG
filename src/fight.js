export default function fight(character, monster) {
  let result = "";
  console.log(monster)
  for (let i = 0; i < monster.hitPoints; i++){
    monster.hitPoints - character.attack;
    character.hitPoints - monster.attack;
  }

  if (monster.hitPoints === 0 && character.hitPoints > 0){
    result = "you won";
  }
  else {
    result = "you lost";
  }
  return result;
};