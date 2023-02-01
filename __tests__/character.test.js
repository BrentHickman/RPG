import Character from './../src/Character.js';

describe('Character', () => {

  test('should correctly create a Character object with class, attribute, hitPoints and attack properties', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    expect(myCharacter.type).toEqual("warrior");
    expect(myCharacter.attribute).toEqual("strength");
    expect(myCharacter.hitPoints).toEqual(5);
    expect(myCharacter.attack).toEqual(5);
  });

  test('should correctly change the type of Character', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    myCharacter.addType("mage")
    expect(myCharacter.type).toEqual("mage");
    expect(myCharacter.attribute).toEqual("strength");
    expect(myCharacter.hitPoints).toEqual(5);
    expect(myCharacter.attack).toEqual(5);
  });

  test('should correctly change the attrubute of Character', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    myCharacter.updateAttribute("strength + 1")
    expect(myCharacter.type).toEqual("warrior");
    expect(myCharacter.attribute).toEqual("strength + 1");
    expect(myCharacter.hitPoints).toEqual(5);
    expect(myCharacter.attack).toEqual(5);
  });

  test('should correctly change the hitPoints of Character', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    myCharacter.updateHp(4)
    expect(myCharacter.type).toEqual("warrior");
    expect(myCharacter.attribute).toEqual("strength");
    expect(myCharacter.hitPoints).toEqual(4);
    expect(myCharacter.attack).toEqual(5);
  });
});
