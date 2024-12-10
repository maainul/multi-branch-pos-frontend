import React, { useEffect, useState } from "react";
import Label from "../Layouts/form/label";
import Input from "../Layouts/form/Input";
import Button from "../Layouts/form/Button";
import Select from "../Layouts/form/Select";
import { accountType } from "../../utils/accountType";
import { useNavigate } from "react-router-dom";
import { createBankAccount } from "../../services/bankService";
import SuccessMessage from "../Utils/SuccessMessage";
import FormValidationErrorMsg from "../Layouts/form/FormValidationErrorMsg";
import { statusOptions } from "../../utils/status";
import useBranches from "../../hooks/useBranches";
import { formatBranchSelect } from "../../utils/formatBranchSelect";

const BankAccountForm = () => {
  const initialData = {
    accountType: "",
    accountHolder: "",
    accountNumber: "",
    totalAmount: "",
    branchId: "",
    openDate: "",
    status: "",
  };
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState(initialData);
  const [responseMessage, setResponseMessage] = useState(null);

  // Custom Hook For Branch List
  const { branches } = useBranches();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBankAccount(formData);
      setResponseMessage("Bank Account Added Successfully");
      navigate("/bank-accounts");
    } catch (error) {
      console.log("Error creating Bank Account :", error.response);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <div className="pt-1">
        {responseMessage && <SuccessMessage message={responseMessage} />}
        <form
          className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <Label title="Account Holder" />
            <Input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label="accountHolder" />
          </div>
          <div className="mb-3">
            <Label title="Account Number" />
            <Input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label="accountNumber" />
          </div>
          <div className="mb-3">
            <Label title="Total Amount" />
            <Input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label="totalAmount" />
          </div>
          <div className="mb-3">
            <Label title="Branch Name" />
            <Select
              name="branchId"
              value={formData.branchId}
              onChange={handleChange}
              options={formatBranchSelect(branches)}
              placeholder="Select Branch"
            />
            <FormValidationErrorMsg errorMsg={error} label="branchId" />
          </div>
          <div className="mb-3">
            <Label title="Open Date" />
            <Input
              type="number"
              name="openDate"
              value={formData.openDate}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label="openDate" />
          </div>
          <div className="mb-3">
            <Label title="Account Type" />
            <Select
              type="number"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              options={accountType}
              placeholder="Select Account Type"
            />
            <FormValidationErrorMsg errorMsg={error} label="accountType" />
          </div>
          <div className="mb-3">
            <Label title="Status" />
            <Select
              type="number"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={statusOptions}
              placeholder="Select Status"
            />
            <FormValidationErrorMsg errorMsg={error} label="status" />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
};

export default BankAccountForm;
