const priceCheck = (products, productPrices, productSold, soldPrice) => {

  const priceList = products.reduce((acc, cur, index) => {
    acc[cur] = productPrices[index];
    return acc;
  }, {})

  return productSold.reduce((acc, cur, index) => {
    return priceList[cur] === soldPrice[index]
      ? acc
      : acc + 1
  }, 0)

}


module.exports = priceCheck;
