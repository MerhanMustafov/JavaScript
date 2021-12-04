function needed_money_for_fruit(fruit, gr, price) {
    return `I need $${((gr / 1000) * price).toFixed(2)} to buy ${(gr/1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(needed_money_for_fruit('orange', 2500, 1.80))
console.log(needed_money_for_fruit('apple', 1563, 2.35))
