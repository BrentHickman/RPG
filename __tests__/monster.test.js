import Monster from './../src/Monster.js';

describe('Monster', () => {

  test('should correctly create a Monster object with name, hitPoints and attack properties', () => {
    const monster1 = new Monster("Monster1", 10, 1);
    expect(monster1.name).toEqual("Monster1");
    expect(monster1.hitPoints).toEqual(10);
    expect(monster1.attack).toEqual(1);
  });

  test('should correctly update a Monster object name', () => {
    const monster1 = new Monster("Monster1", 10, 1);
    monster1.updateName("Monster2");
    expect(monster1.name).toEqual("Monster2");
  });

  test('should correctly update a Monster object hitpoints', () => {
    const monster1 = new Monster("Monster1", 10, 1);
    monster1.updateHp(5);
    expect(monster1.hitPoints).toEqual(5);
  });

  test('should correctly update a Monster object attack', () => {
    const monster1 = new Monster("Monster1", 10, 1);
    monster1.updateAtk(2);
    expect(monster1.attack).toEqual(2);
  });
});
