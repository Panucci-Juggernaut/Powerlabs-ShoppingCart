# Powerlabs Shopping Cart

A simple React-based shopping cart application built with Vite. Users can browse products, add them to a cart, apply a coupon for a discount, and view the total price.

## Features

- Browse a list of products loaded from a JSON file
- Add and remove products from the cart
- Adjust product quantities in the cart
- Apply a coupon code (`POWERLABSx`) for a 13.2% discount
- Responsive and clean UI

## Project Structure

```
.
├── public/
│   └── products.json         # Product data
├── src/
│   ├── components/
│   │   ├── Cart.jsx          # Cart display and logic
│   │   ├── Coupon.jsx        # Coupon input and validation
│   │   └── ProductList.jsx   # Product listing and add-to-cart
│   ├── App.jsx               # Main app component
│   ├── index.css             # App styles
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Project metadata and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/Panucci-Juggernaut/powerlabs-shoppingcart.git
cd powerlabs-shoppingcart
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the development server

```sh
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 4. Build for production

```sh
npm run build
```

- The production-ready files will be in the `dist` folder.

### 5. Preview the production build

```sh
npm run preview
```

## Usage

- Browse the products on the main page.
- Click "Add to Cart" to add a product.
- Adjust quantities or remove items in the cart section.
- Enter the coupon code `POWERLABSx` to apply a 13.2% discount.

## Linting

To check code quality using ESLint:

```sh
npm run lint
```


**Made with React and Vite.**