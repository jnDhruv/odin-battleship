import Ship from "./Ship";

describe('Ship class', () => {
  test('initializes with correct length and 0 hits', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
  });

  test('hit() increases hits count', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('isSunk() returns false when hits < length', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() returns true when hits === length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('isSunk() returns true when hits > length (overkill)', () => {
    const ship = new Ship(1);
    ship.hit();
    ship.hit(); // extra hit
    expect(ship.isSunk()).toBe(true);
  });

  test('hit() does not increase hits beyond length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.hit(); // should not increase
    expect(ship.hits).toBe(2);
  });

  test('multiple ships maintain their own state', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(4);

    ship1.hit();
    ship2.hit();
    ship2.hit();

    expect(ship1.hits).toBe(1);
    expect(ship2.hits).toBe(2);

    expect(ship1.isSunk()).toBe(false);
    expect(ship2.isSunk()).toBe(false);
  });
});