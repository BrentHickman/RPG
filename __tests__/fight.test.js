import fight from './../src/fight.js';
import Monster from './../src/Monster.js';
import Character from './../src/Character.js';


describe('fight', () => {

  test('should correctly return lost message', () => {
    let result = "";
    expect(fight()).toEqual("you lost");
  });

  test('should correctly return you won message', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    const monster1 = new Monster("Monster1", 0, 1);
    let result = "";
    expect(fight(myCharacter, monster1)).toEqual("you won");
  });

  test('should subtract character attack from monster hp and vice versa until monster hit points = 0', () => {
    const myCharacter = new Character("warrior", "strength", 5, 5);
    const monster1 = new Monster("Monster1", 10, 1);
    let result = "";
    expect(fight(myCharacter, monster1)).toEqual("you won");
  });
});
