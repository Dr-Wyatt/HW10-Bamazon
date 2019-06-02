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
    optionsMenu();
});

function optionsMenu() {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "Options",
            type: "list",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "End"]
        }
    ]).then(answers => {
        if (answers.Options == "View Products for Sale") {
            viewProducts();
        } else if (answers.Options == "View Low Inventory"){
            viewLowInventory();
        } else if (answers.Options == "Add to Inventory") {
            console.log(answers.Options);
        } else if (answers.Options == "Add New Product"){
            console.log(answers.Options);
        } else {
            connection.end();
        }

    })
}


function viewProducts(){
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        optionsMenu();
    });
}

function viewLowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        console.table(res);
        optionsMenu();
    });
}