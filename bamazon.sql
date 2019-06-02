DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Birthday Cake Ice Cream", "Food", 2.00, 10), ("Pokemon Cards", "Toys & Games", 4.50,10), ("Starbucks K-Cups", "Food", 10.00, 15), 
("Personalized Coffee Mugs", "Kitchen", 15.00, 7), ("Cell Phone Cases", "Electronics", 5.00, 20), ("Wireless Headphones", "Electronics", 100, 5), 
("Nike Tennis Shoes", "Athletics", 75.00, 4), ("Decorative Pillows", "Home", 10.00, 11), ("Bicycle", "Athletics", 60.00, 2), ("Blankets", "Home", 20.00, 3);
