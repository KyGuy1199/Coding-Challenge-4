// Task 1: Create an Inventory Array of Product Objects

let Inventory = [
    {
        name: 'Concert Ticket',
        price: 250,
        quantity: 60000,
        lowStockLevel: 1000,         
    },
    {
        name: 'VIP Concert Ticket',
        price: 550,
        quantity: 1500,
        lowStockLevel: 250,
    },
    {
        name: 'Meet and Greet Ticket',
        price: 300,
        quantity: 500,
        lowStockLevel: 50,
    },
    {
        name: 'Food Voucher',
        price: 75,
        quantity: 50000,
        lowStockLevel: 800,
    },
    {
        name: 'Drink Package',
        price: 150,
        quantity: 30000,
        lowStockLevel: 300,
    },
// The array of objects making up the inventory
]    

// Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
    if (product.quantity >= product.lowStockLevel){
         console.log(product.name, product.price, product.quantity, "In Stock");
    } else if (product.quantity <= product.lowStockLevel){
         console.log(product.name, product.price, product.quantity, "Low Stock");
    }
}  

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity = (product.quantity - unitsSold);
    if (product.quantity <= product.lowSockLevel) {
         console.log("Low Stock");
    } else if  (product.quantity == 0) {
         console.log("Out of Stock");
    }
}

// Task 4: Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name)
        }
    });
}

// Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventory) {
    let inventoryValue = inventory.reduce((total, product) => total + (product.quantity * product.price), 0);
    console.log(inventoryValue);
}

// Task 6: Create a Function to Process a Sale

function processSale(productname, unitssold) {
    let product = Inventory.find(product => product.name == productname);
    if (product) {
        updateStock(product, unitssold);
    } else {
        console.log('Not in Inventory');
    }
}