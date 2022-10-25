const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

function showProducts() {
	// Show products
	for (let i = 0; i < products.length; i++) {
		console.log(`#${(i + 1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
	}
}
showProducts();

let productNumber;
function getProductNumber() {
	do {
		productNumber = prompt('Enter the product you wanna buy:');
		productNumber--;
	} while (productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
	return productNumber;
};
getProductNumber();

const selectedProduct = products[productNumber];

// Get amount of products to be bought
function getAmountOfProduct() {
	let amount;
	do {
		amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
	} while (amount <= 0 || isNaN(amount));
	return amount;
}
let amountProduct = getAmountOfProduct();

// Calculate the initial price
function calculateInitialPrice() {
	const finalPrice = selectedProduct.price * amountProduct;
	return finalPrice;
}
calculateInitialPrice();

// Check if discount needed
function checkDiscount() {
	console.log('The price is $' + calculateInitialPrice());
	if (calculateInitialPrice() * EXCHANGE > DISCOUNT_STARTS_FROM) {
		const superFinalPrice = calculateInitialPrice() - calculateInitialPrice() * DISCOUNT;

		console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
		console.log('Please pay $' + superFinalPrice);
	}
}

checkDiscount();

