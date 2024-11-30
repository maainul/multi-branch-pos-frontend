import "./App.css";
import Gifts from "./components/Gift/Gifts";
import Branches from "./components/Branch/Branches";
import Products from "./components/Product/Products";
import Employees from "./components/Employee/Employees";
import Customers from "./components/Customer/Customers";
import Suppliers from "./components/Supplier/Suppliers";
import Categories from "./components/Category/Categories";
import BankAccounts from "./components/BankAccount/BankAccounts";
import ExpenseTypes from "./components/ExpenseType/ExpenseTypes";
import SubCategories from "./components/SubCategory/SubCategories";
import CompanyAssets from "./components/CompanyAsset/CompanyAssets";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryCompanies from "./components/DeliveryCompany/DeliveryCompanies";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/assets" element={<CompanyAssets />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/bank-accounts" element={<BankAccounts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/customers" element={<Customers />} />
              <Route
                path="/delivery-companies"
                element={<DeliveryCompanies />}
              />
              <Route path="/employees" element={<Employees />} />
              <Route path="/expense-types" element={<ExpenseTypes />} />
              <Route path="/gifts" element={<Gifts />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sub-categories" element={<SubCategories />} />
              <Route path="/suppliers" element={<Suppliers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
