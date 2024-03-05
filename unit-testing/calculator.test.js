const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});


test("die Differenz von a und b ist 4", () => {
  const result = calculator.subract(9, 5);

  expect(result).toEqual(4);
});

test("die Differenz von a und -b ist 14", () => {
  const result = calculator.subract(9, -5);

  expect(result).toEqual(14);
});

test("die Differenz von a und b ist 9", () => {
  const result = calculator.subract(9, 0);

  expect(result).toEqual(9);
});

test("Das Produkt von 5 mal 6 ist 30", () => {
  const result = calculator.multiply(5, 6);

  expect(result).toEqual(30);
});

test("Das Produkt von 5 mal 6 ist -30", () => {
  const result = calculator.multiply(5, -6);

  expect(result).toEqual(-30);
});

test("Das Produkt von 5 mal 0 ist 0", () => {
  const result = calculator.multiply(5, 0);

  expect(result).toEqual(0);
});