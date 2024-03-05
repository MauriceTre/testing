const shoppingCart = require("./shoppingCart");

describe("Einkaufswagen", () => {
  test("Der Gesamtwert des Cart ist bei 0 Items gleich 0", () => {
    expect(shoppingCart.getTotalValue()).toBe(0);
  });

  test("Nach dem ersten addCartItem() muss die Array-Länge 1 sein", () => {
    shoppingCart.addCartItem("Apfel", 5);
    expect(shoppingCart.cart.length).toBe(1);
  });

  test("Nach dem zweiten addCartItem() muss die Array-Länge 2 sein", () => {
    shoppingCart.addCartItem("Birne", 3);
    expect(shoppingCart.cart.length).toBe(2);
  });
});
