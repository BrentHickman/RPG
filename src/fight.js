export default function fight(character, monster) {
  let result = "";
  if (monster.hitPoints === 0 && character.hitPoints > 0){
    result = "you won";
  }
  else {
    result = "you lost";
  }
  return result;
};