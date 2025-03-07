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

import BranchDetails from "./components/Branch/BranchDetails";
import BranchUpdate from "./components/Branch/BranchUpdate";
import BranchForm from "./components/Branch/BranchForm";
import BankAccountForm from "./components/BankAccount/BankAccountForm";
import BankAccountUpdate from "./components/BankAccount/BankAccountUpdate";
import BankAccountDetails from "./components/BankAccount/BankAccountDetails";

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
              <Route path="/branch/:id" element={<BranchDetails />} />
              <Route path="/branch/add" element={<BranchForm />} />
              <Route path="/branch/update/:id" element={<BranchUpdate />} />
              <Route path="/bank-accounts" element={<BankAccounts />} />
              <Route path="/bank-account/add" element={<BankAccountForm />} />
              <Route
                path="/bank-account/update/:id"
                element={<BankAccountUpdate />}
              />
              <Route
                path="/bank-account/show/:id"
                element={<BankAccountDetails />}
              />
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
