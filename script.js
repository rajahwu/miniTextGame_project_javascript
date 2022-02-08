
// create variables to capture user input
var itemName = document.getElementById('itemName');
//console.log(itemName);
var itemPrice = document.getElementById('itemPrice');
//console.log(itemPrice);
var itemQuantity = document.getElementById('itemQuantity');
//console.log(itemQuantity);

// create variable to display user input
let itemDisplay = itemList.querySelector('.item')
//console.log(itemDisplay)
let priceDisplay =  itemList.querySelector('.price')
//console.log(priceDisplay)
let subtotalDisplay = itemList.querySelector('.subtotal')
//console.log(subtotalDisplay)
let taxDisplay = itemList.querySelector('.tax')
//console.log(taxDisplay)
let totalDisplay = itemList.querySelector('.total')
//console.log(totalDisplay)



  let subtotal = itemPrice.value * itemQuantity.value
  let tax = subtotal * 0.06
  let total = subtotal + tax
  console.log(subtotal, tax, total)


// add event listeners to add item button
document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemName.value)
  itemDisplay.textContent = itemName.value

})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemPrice.value)
  priceDisplay.textContent = itemPrice.value
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemQuantity.value)
  totalDisplay.textContent = itemQuantity.value
})
