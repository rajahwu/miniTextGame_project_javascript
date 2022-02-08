

var itemName = document.getElementById('itemName');
console.log(itemName);

var itemPrice = document.getElementById('itemPrice');
console.log(itemPrice);

var itemQuantity = document.getElementById('itemQuantity');
console.log(itemQuantity);

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemName.value)
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemPrice.value)
})

document.getElementById('addItemBtn').addEventListener('click', e => {
  console.log(itemQuantity.value)
})
