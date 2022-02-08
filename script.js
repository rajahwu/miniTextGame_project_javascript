
// create variables to capture user input
var itemName = document.getElementById('itemName');
//console.log(itemName);
var itemPrice = document.getElementById('itemPrice');
//console.log(itemPrice);
var itemQuantity = document.getElementById('itemQuantity');
//console.log(itemQuantity);

// create variable to display user input
let itemDisplay = itemList.querySelector('.item')
let priceDisplay =  itemList.querySelector('.price')
let quantityDisplay = itemList.querySelector('.quantity')
let subtotalDisplay = itemList.querySelector('.subtotal')
let taxDisplay = itemList.querySelector('.tax')
let totalDisplay = itemList.querySelector('.total')



  let subtotal = itemPrice.value * itemQuantity.value
  let tax = subtotal * 0.06
  let total = subtotal + tax
  console.log(subtotal, tax, total)


// add event listeners to add item button
document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemName.value)
  itemDisplay.textContent = `We will price your ${itemName.value}.`
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  quantityDisplay.textContent = `You've selected a quanity of ${itemQuantity.value}.`
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemPrice.value)
  priceDisplay.textContent = `Your cost before tax is ${subtotal}`
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(tax)
  taxDisplay.textContent = `Tax: ${tax}`
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemQuantity.value)
  totalDisplay.textContent = `Total: ${total}`
})
