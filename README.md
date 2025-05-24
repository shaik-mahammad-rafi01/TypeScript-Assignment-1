# Brewery Billing System 

 This is a simple console-based billing system built using TypeScript. It allows users to select products from a restaurant menu, choose quantities, and optionally a cup size (for beverages). The system calculates the total bill and applies discounts when applicable.

##  Features

- Displays a list of available products with:
     - Product name
  - Price
  - Product type: `vegan`, `vegetarian`, or `non-vegetarian`
  - Category: `beverages`, `sweets`, `desserts`, `snacks`

- User can:
  - Select a product by name
  - Enter quantity
  - Choose cup size for beverages (`small`, `medium`, `large`)

- Applies **10% discount** if bill total exceeds ₹1000

- Displays final bill with:
  - Product summary
  - Subtotals
  - Discount (if any)
  - Total payable amount

## 🧩 Tech Stack

- **Language:** TypeScript  
- **Runtime:** Node.js  
- **Input Handling:** `readline` module  
- **Types Used:** Type Aliases, Interfaces

---

#### How to Run This Project
Step 1 : Clone The Repo : 
```bash
 git clone git@github.com:shaik-mahammad-rafi01/TypeScript-Assignment-1.git
```
Step 2 : Initialize Node.js 
```
npm init -y
 ```
Step 3 : Install TypeScript
```
npm install -g typescript
```
Step 4 : Create tsconfig.json
```
npx tsc --init
```
Step 5 : Compile the TypeScript file
```
tsc Brewery.ts
```
Step 6 : Run the app using Node.js
```
node Brewery.js

