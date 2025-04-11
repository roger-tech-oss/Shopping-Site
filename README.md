# 🛒 Shopping Site

A responsive, modern shopping website built with **React** and **Vite**, styled with plain **CSS**, and powered by the **Fake Store API**. Users can browse products, manage a cart, and simulate checkout, all with a clean and user-friendly interface.

### 🌐 Live Demo

👉 [Click here to view the live site](https://roger-tech-oss.github.io/products)  

---

## ✨ Features

- 🔐 **JWT Login** (via Fake Store API)
- 📦 **Product Listing** with filtering by category
- 🔍 **Product Details Page** with "Add to Cart"
- 🛍️ **Cart Page** with quantity management & remove option
- ✅ **Checkout simulation**
- 📊 Persistent cart state (using localStorage)
- 🧭 Header with navigation and dynamic cart count
- 🚪 Logout functionality

---

## ⚙️ Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Plain CSS**
- **Fake Store API**
- **React Toastify** (for notifications)
- **GitHub Pages** (for deployment)

---

## 📁 Project Structure
src/ 
├── assets/ 
│ └── react.svg 
├── components/ 
│ ├── Header.jsx 
│ └── Header.css 
├── context/ 
│ ├── CartContext.jsx
│ ├── CartProvider.jsx 
│ └── useCart.jsx 
├── pages/ 
│ ├── Cart.jsx
│ ├── Cart.css
│ ├── Home.jsx 
│ ├── Home.css 
│ ├── Login.jsx 
│ ├── Login.css 
│ ├── ProductDetail.jsx 
│ ├── ProductDetail.css 
│ ├── Products.jsx 
│ ├── Products.css 
│ └── Register.jsx 
├── App.jsx 
├── App.css 
├── main.jsx 
├── index.css 
eslint.config.js


---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/roger-tech-oss/Shopping-Site.git
cd Shopping-Site


### 2. Install dependencies 

npm install

### 3. Run the development server

npm run dev

---

📦 API Used
Fake Store API
Endpoints used:
   * https://fakestoreapi.com/products
   * https://fakestoreapi.com/products/categories
   * https://fakestoreapi.com/auth/login

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
* Fake Store API
* React Router
* React Toastify
* Vite


