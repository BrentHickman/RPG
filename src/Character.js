export default class Character {
  constructor(type, attribute, hitPoints, attack){
    this.type = type;
    this.attribute = attribute;
    this.hitPoints = hitPoints;
    this.attack = attack;
  }

  addType(type) {
    this.type = type;
  }
};

