const { add, subtract } = require('./math');

describe('math.js', () => {
  it('Tests adding numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('Tests subtracting numbers', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
