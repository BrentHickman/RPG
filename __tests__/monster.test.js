import Monster from './../src/Monster.js';

describe('Monster', () => {

  test('should correctly create a Monster object with name, hitPoints and attack properties', () => {
    const monster1 = new Monster("Monster1", 10, 1);
    expect(monster1.name).toEqual("Monster1");
    expect(monster1.hitPoints).toEqual(10);
    expect(monster1.attack).toEqual(1);
  });
});
