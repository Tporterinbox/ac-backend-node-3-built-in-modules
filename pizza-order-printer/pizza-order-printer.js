/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

// get user input
const command = process.argv[2];
const index = process.argv[3];

async function printPizzaOrders() {
  try {
    // read the JSON file
    const data = await fs.readFile("data.json", "utf8");

    // convert JSON string to JS array
    const orders = JSON.parse(data);

    // if user enters getAllOrders
    if (command === "getAllOrders") {
      orders.forEach(order => {
        console.log(order);
      });
    }

    // if user enters getOneOrder
    else if (command === "getOneOrder") {
      if (orders[index]) {
        console.log(orders[index]);
      } else {
        console.log("Order not found. Please enter a valid order number.");
      }
    }

  } catch (error) {
    console.log("Error reading file:", error);
  }
}

printPizzaOrders();



// Test cases / Run the program

// node pizza-order-printer.js getAllOrders
// outputs:Margherita Pizza - extra cheese
// Pepperoni Pizza - no olives
// Veggie Pizza - gluten-free crust
// Hawaiian Pizza - extra pineapple
// BBQ Chicken Pizza - add jalapeños
// Mushroom Pizza - thin crust
// Four Cheese Pizza - stuffed crust

// node pizza-order-printer.js getOneOrder 2
// output: Veggie - gluten-free crust

// node pizza-order-printer.js getOneOrder 5
// output:  Mushroom Pizza - thin crust

// node pizza-order-printer.js getOneOrder 10
// output:Order not found. Please enter a valid order number.