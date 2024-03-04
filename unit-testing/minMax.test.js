const { min, max } = require('./minMax');


// Test für die min-Funktion
test('Teste die min-Funktion', () => {
    // Überprüfe, ob die Funktion den kleineren Wert zurückgibt
    expect(min(10, 5)).toBe(5);
    expect(min(-1, 5)).toBe(-1);
    expect(min(0, 0)).toBe(0);
  });

 // Test für die max-Funktion
test('Teste die max-Funktion', () => {
    // Überprüfe, ob die Funktion den größeren Wert zurückgibt
    expect(max(10, 5)).toBe(10);
    expect(max(-1, 5)).toBe(5);
    expect(max(0, 0)).toBe(0);
  }); 