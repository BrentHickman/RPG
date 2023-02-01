import fight from './../src/fight.js';
import Monster from './../src/Monster.js';
import Character from './../src/Character.js';


describe('fight', () => {

  test('should correctly retun lost message', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    const monster1 = new Monster("Monster1", 10, 1);
    let result = "";
    fight (myCharacter, monster1);
    expect(result).toEqual("you lost");
  });
});
