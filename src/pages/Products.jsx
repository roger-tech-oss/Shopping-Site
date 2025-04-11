import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    setFiltered(data);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    setCategories(data);
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFiltered(products);
    } else {
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await res.json();
      setFiltered(data);
    }
  };

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="products-container">
      <ToastContainer />

      <div className="filter-bar">
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>

            <div className="product-actions">
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <Link to={`/products/${product.id}`}>
                <button>View Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
