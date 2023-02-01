import Character from './../src/Character.js';

describe('Character', () => {

  test('should correctly create a Character object with class, attribute, hitPoints and attack properties', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    expect(myCharacter.type).toEqual("warrior");
    expect(myCharacter.attribute).toEqual("strength");
    expect(myCharacter.hitPoints).toEqual(5);
    expect(myCharacter.attack).toEqual(5);
  });
});