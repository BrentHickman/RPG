export default class Monster {
  constructor (name, hitPoints, attack) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attack = attack;
  }

  updateName(name) {
    this.name = name;
  }

  // updateHp(hitPoints) {
  //   this.hitPoints = hitPoints;
  // }

  // updateAtk(attack) {
  //   this.attack = attack;
  // }
}