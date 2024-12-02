import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-600 text-white p-4">
        <ul>
          <li className="flex justify-between">
            <Link to="/">Home</Link>
            <Link to="/branches">Branch</Link>
            <Link to="/branch/add">Branch Add</Link>
            <Link to="/bank-accounts">Bank Account</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/delivery-companies">Delivery Companies</Link>
            <Link to="/employees">Employee</Link>
            <Link to="/expense-types">Expense Types</Link>
            <Link to="/gifts">Gifts</Link>
            <Link to="/products">Products</Link>
            <Link to="/sub-categories">Sub Category</Link>
            <Link to="/suppliers">Suppliers</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
