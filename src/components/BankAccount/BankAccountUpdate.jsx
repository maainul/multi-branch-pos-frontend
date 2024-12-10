import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../Layouts/form/Input";
import Label from "../Layouts/form/label";
import Select from "../Layouts/form/Select";
import Button from "../Layouts/form/Button";

import { listBranches } from "../../services/branchService";
import {
  getBankAccountDetails,
  updateBankAccountService,
} from "../../services/bankService";

import { formatDate } from "../../utils/formatDate";
import { statusOptions } from "../../utils/status";
import { accountType } from "../../utils/accountType";
import useBranches from "../../hooks/useBranches";
import { formatBranchSelect } from "../../utils/formatBranchSelect";

const BankAccountUpdate = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [bankAccountDetails, setBankAccountDetails] = useState(null);
  // Custom Hook For Branch List
  const { branches } = useBranches();
  useEffect(() => {
    const fetchBankAccount = async () => {
      try {
        const response = await getBankAccountDetails(id);
        setBankAccountDetails(response.data);
        setError(null);
      } catch (error) {
        console.log("Error fetching BankAccount details : ", error);
        setError("Failed to fetch BankAccount details.");
      }
    };
    fetchBankAccount();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBankAccount = await updateBankAccountService(
        id,
        bankAccountDetails
      );
      setBankAccountDetails(updatedBankAccount.data);
      setSuccessMessage("BankAccount updated successfully");
      setError(null);
    } catch (error) {
      console.log("Error updating Bank Account:", error);
      setError("Failed to update Bank Account");
    }
  };

  return (
    <>
      <div className="pt-2 ">
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
        {bankAccountDetails && (
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg"
            >
              <div className="mb-3">
                <Label title="Account Holder" />
                <Input
                  type="text"
                  name="accountHolder"
                  value={bankAccountDetails.accountHolder}
                  onChange={handleChange}
                />
                {error}
              </div>
              <div className="mb-3">
                <Label title="Account Number" />
                <Input
                  type="text"
                  name="accountNumber"
                  value={bankAccountDetails.accountNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title="Total Amount" />
                <Input
                  type="number"
                  name="totalAmount"
                  value={bankAccountDetails.totalAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title="Branch Name" />
                <Select
                  type="number"
                  name="branchId"
                  value={bankAccountDetails.branchId}
                  placeholder="Select Branch Name"
                  onChange={handleChange}
                  options={formatBranchSelect(branches)}
                />
              </div>
              <div className="mb-3">
                <Label title="Open Date" />
                <Input
                  type="date"
                  name="openDate"
                  value={formatDate(bankAccountDetails.openDate)}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <Label title="Account Type" />
                <Select
                  type="number"
                  name="accountType"
                  value={bankAccountDetails.accountType}
                  onChange={handleChange}
                  options={accountType}
                  placeholder="Select Account Type"
                />
              </div>
              <div className="mb-3">
                <Label title={"BankAccount Status"} />
                <Select
                  name="status"
                  value={bankAccountDetails.status}
                  onChange={handleChange}
                  options={statusOptions}
                  placeholder="Select Status"
                />
              </div>
              <div>
                <Button />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default BankAccountUpdate;
