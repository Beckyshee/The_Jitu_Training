const items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

// Use map to extract prices
const prices = items.map(item => item.price);

// Use filter if you want to exclude certain items based on a condition
// For example, let's exclude items with a price less than 10:
const filteredPrices = prices.filter(price => price >= 10);

// Use reduce to calculate the sum
const totalPrice = filteredPrices.reduce((acc, price) => acc + price, 0);

console.log(totalPrice);