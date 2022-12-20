import makeArrayByList from '../src/sortFeatures';

test('should make new Array by order', () => {
  const result = makeArrayByList({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level']);

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(expected);
});
