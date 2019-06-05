# HW11-Bamazon

## Introduction

This is a Node.js app to query a MySQL Table to display and update the table.

## How it Works

Currently, there are two JS Files that can executed, the customer experience and the manager experience.

Customer Experience allows the user to:

* See the current products available for sale, stored in the MySQL DB. 

<img src="ScreenShots\items-for-purchase.PNG" width="30%" height="30%">

* Then the user will be able to select which item to buy, and how many. 

<img src="ScreenShots\choice-for-purchase.PNG" width="30%" height="30%">

* This will return either a Successful purchase message, followed by the final cost, or an Insufficient Amount message and will not go through with the purchase. If a purchase is made successfully, the stock_quantity is updated accordingly in the table. 

<img src="ScreenShots\items-purchase-successful.PNG" width="30%" height="30%"> <img src="ScreenShots\items-purchase-fail.PNG" width="30%" height="30%">

Manager Experience allows the user to chose from an options menu:

* View the current products for sale, stored in the MySQL DB.

<img src="ScreenShots\view-products.PNG" width="50%" height="30%">

* View all items that have a stock_quantity count under 5 in the DB.

<img src="ScreenShots\view-low-inventory.PNG" width="50%" height="30%">

* Ability to add to the stock_quantity of any given item which will update the DB.

<img src="ScreenShots\add-inventory.PNG" width="50%" height="30%">

* Ability to add a completely new item to the MySQL DB.

<img src="ScreenShots\add-product.PNG" width="50%" height="30%">
