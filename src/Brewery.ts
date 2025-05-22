import * as readline from 'readline';
// defining types : 

type ProductType = "vegan" | "vegetarian" | "non-vegetarian"
type category = "Beverages" | "sweets" | "desserts" | "snacks"
type cupSize = "small" | "medium" | "large"

// defining bluePrint of product using interface  like classes
interface Product {
    name: string,
    price: number,
    type: ProductType,
    category: string
}

interface SelectedItem {
    product: Product,
    quantity: number,
    cupsize?: cupSize
}

const products: Product[] = [
    { name: "Almond milk", price: 150, type: "vegan", category: "Beverages" },
    { name: "Coffee", price: 180, type: "vegetarian", category: "Beverages" },
    { name: "cake", price: 120, type: "vegetarian", category: "Desserts" },
    { name: "checken wings", price: 250, type: "non-vegetarian", category: "Snacks" },
    { name: "Lemone juice", price: 100, type: "vegan", category: "Beverages" },
    { name: "laddu", price: 90, type: "vegetarian", category: "Sweets" },
    { name: "Paneer curry", price: 200, type: "vegetarian", category: "Snacks" },

];

// Taking input from user: 

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise(resolve => input.question(question, resolve));
}

async function startBilling(): Promise<void> {
    console.log("Welcome to Brewery!\n");
    console.log('Available Products in our Restarant :\n\n');

    products.forEach(p => {
        console.log(`- ${p.name} | ₹${p.price} | ${p.type} | ${p.category}`);
    });

    const selectedItems: SelectedItem[] = [];
    
    while (true) {
        let name = (await ask("\nEnter the product name:  ")).trim();
        if (name.toLowerCase() === "done")
            break;
        const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (!product) {
            console.log("searched product is not available. try again");
            continue;
        }
        const EnteredQuantity = await ask("Enter the quantity :  ");
        const quantity = parseInt(EnteredQuantity);
        if (isNaN(quantity)) {
            console.log("Enter atleast one !");
            continue;
        }

        let cupsize: cupSize | undefined;
        if (product.category === "Beverages") {
            const size = (await ask("Enter the cupsize you want :  ")).trim();
            if (!["small", "medium", "large"].includes(size)) {
                console.log("This cupsize in not available,so default size is small");
                cupsize = "small";
            }
            else {
                cupsize = size as cupSize
            }
        }
        selectedItems.push({ product, quantity, cupsize });

        const moreItems = (await ask("want to add another products :  ")).trim();
        if (moreItems === "yes") {
            continue;
        }
        else {
            break;
        }
    }
    
    // billing calculation part of code 

    console.log("Final bill for All Products")

    let total = 0;
    let discount = 0;
    selectedItems.forEach(item => {
        const { product, quantity } = item;
        const itemTotal = product.price * quantity;
        total += itemTotal;
        console.log("Total cost : " + total)
    })
    if (total > 1000) {
        discount = total * 0.1;
        total -= discount;
        console.log("Discount is applied (10% off for if bill > 1000)")
    }
    console.log(`\n Total Payable Amount : ${total}`)
    const Paid = (await ask("Paid? (Yes/No) : ")).trim().toLowerCase();
    if (Paid === "yes") {
        console.log("Ready for Next Customer.\n");
        return startBilling();
    }
    else {
        console.log("Exits. Thank You Visit Next-Time...")
        input.close();
    }
}

startBilling();

