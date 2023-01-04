const priceCheck = require('./index');

test('first example from the exercise', () => {
  expect(priceCheck(
    products = ['rice', 'sugar', 'wheat', 'cheese'],
    productPrices = [16.89, 56.92, 20.89, 345.99],
    productSold = ['rice', 'cheese'],
    soldPrice = [18.99, 400.89]
  )).toBe(2);
});

test('second example from the exercise', () => {
  expect(priceCheck(
    products = ['eggs', 'milk', 'cheese'],
    productPrices = [2.89, 3.29, 5.79],
    productSold = ['eggs', 'eggs', 'cheese', 'milk'],
    soldPrice = [2.89, 2.99, 5.97, 3.29]

  )).toBe(2);
});