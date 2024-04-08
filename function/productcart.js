class ProductsCart {
    constructor(names, quantities, prices) {
        this.data = [];

        // Check if input arrays have the same length
        if (names.length === quantities.length && names.length === prices.length) {
            for (let i = 0; i < names.length; i++) {
                const product = {
                    name: names[i],
                    quantity: quantities[i],
                    price: prices[i]
                };
                this.data.push(product);
            }
        } else {
            console.error("Input arrays must have the same length.");
        }
    }

    // Method to calculate total
    total() {
        let totalPrice = 0;
        this.data.forEach(product => {
            totalPrice += product.quantity * product.price;
        });
        return totalPrice;
    }
}

// Example usage:
const names = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

const myCart = new ProductsCart(names, quantities, prices);
console.log("Total:", myCart.total()); // Output: 290
