// app/header/Header.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import './Header.css'; 
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa"; // Importing search, cart, and heart icons

const Header = () => {
  const [query, setQuery] = useState<string>(""); // State for storing the search query
  const [isFocused, setIsFocused] = useState<boolean>(false); // State for managing focus state of the input field
  const [cartCount, setCartCount] = useState<number>(0); // State for cart items count
  const [wishlistCount, setWishlistCount] = useState<number>(0); // State for wishlist items count

  // Handle changes to the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle the form submission for search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", query); // You can replace this with actual search logic
  };

  // Handle adding/removing items to/from the cart
  const toggleCart = () => {
    setCartCount(cartCount === 0 ? 1 : 0); // Toggle cart count (add or remove item)
  };

  // Handle adding/removing items to/from the wishlist
  const toggleWishlist = () => {
    setWishlistCount(wishlistCount === 0 ? 1 : 0); // Toggle wishlist count (add or remove item)
  };
  
  return (
    <header className="header-container">
      <div className="header-logo-nav">
        {/* Logo */}
        <Image
          className="header-logo"
          width="50"
          height="50"
          src="/perfume1.png"
          alt="Logo"
        />
        
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/new">New & Refreshing</Link>
            </li>
            <li>
              <Link href="/#">For Men & Women</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-search-cart">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}  // Set focus state
            onBlur={() => setIsFocused(false)}  // Reset focus state
            placeholder="Search"
            className={`search-input ${isFocused ? "focused" : ""}`}
          />
          <FaSearch className="search-icon" />
        </form>

        <div className="header-icons">
          {/* Cart Icon */}
          <div className="icon-container" onClick={toggleCart}>
            <FaShoppingCart className="icon" />
            {cartCount > 0 && (
              <span className="icon-count">{cartCount}</span>
            )}
          </div>

          {/* Wishlist Icon */}
          <div className="icon-container" onClick={toggleWishlist}>
            <FaHeart className="icon" />
            {wishlistCount > 0 && (
              <span className="icon-count">{wishlistCount}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
