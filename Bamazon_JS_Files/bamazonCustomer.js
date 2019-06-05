const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Deadbeef12345",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems();
});

function displayItems(){
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        purchaseItem();
    });
}

function toContinue(){
    inquirer.prompt([
        {
            message: "Would you like to continue?",
            name: "Continue",
            type: "confirm",
        }
    ]).then(answers => {
        if (answers.Continue == true) {
            displayItems();
        } else {
            connection.end();
        }

    })

}

function purchaseItem(){
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                message: "Which item would you like purchase?",
                name: "purchase_item",
                type: "list",
                choices: res.map(item => item.item_id)
            },
            {
                message: "How much would you like to buy?",
                name: "purchase_amount"
            }
        ]).then(answers => {
            let purchasedItem = res.find(item => item.item_id == answers.purchase_item);
            if (purchasedItem.stock_quantity < answers.purchase_amount) {
                console.log("Insufficient quantity! Please try again later.");
                toContinue();
            } else {
                let newStock = purchasedItem.stock_quantity - parseInt(answers.purchase_amount);
                let cost = answers.purchase_amount * purchasedItem.price;
                connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newStock }, { item_id: purchasedItem.item_id }], (err, res) => {
                    console.log("Successfully Purchased!");
                    console.log(`Your cost was $${cost}`);
                    console.log(`There is ${newStock} left of that product`);
                    toContinue();
                })
            }
        })
    });
}

