const { isAdult } = require("./AgeFunctions");

describe("Tests für die isAdult-Funktion", () => {
  test("Test für das Alter von 18 Jahren", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("Test für das Alter von 17 Jahren", () => {
    expect(isAdult(17)).toBe(false);
  });

  test("Test für das Alter von 25 Jahren", () => {
    expect(isAdult(25)).toBe(true);
  });

  test("Test für das Mindestalter", () => {
    expect(isAdult(0)).toBe(false);
  });

  test("Test für das Höchstalter", () => {
    // Annahme: Ein Alter von 150 Jahren wird als Höchstalter betrachtet
    expect(isAdult(150)).toBe(true);
  });

  test("Test für eine nicht-numerische Eingabe", () => {
    expect(() => isAdult("abc")).toThrow(TypeError);
  });

  test("Test für eine negative Eingabe", () => {
    expect(isAdult(-5)).toBe(false);
  });
});
