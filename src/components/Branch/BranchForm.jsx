import React, { useState } from "react";
import { createBranch } from "../../services/branchService";
import Label from "../Layouts/form/label";
import Input from "../Layouts/form/Input";
import { statusOptions } from "../../utils/status";
import TextArea from "../Layouts/form/TextArea";
import Select from "../Layouts/form/Select";
import { formatDate } from "../../utils/formatDate";
import Button from "../Layouts/form/Button";
import FormValidationErrorMsg from "../Layouts/form/FormValidationErrorMsg";
import { useNavigate } from "react-router-dom";

const BranchForm = () => {
  const navigate = useNavigate();

  const initialData = {
    branch_name: "",
    branch_phone: "",
    branch_email: "",
    branch_address: "",
    branch_location: "",
    status: "",
    open_date: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBranch(formData);
      setSuccessMessage("Branch added successfully");
      setError([]);
      navigate("/branches");
    } catch (error) {
      console.log("Error creating Branch:", error);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <div className="pt-2">
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg"
        >
          <div className="mb-3">
            <Label title="Branch Name" />
            <Input
              type="text"
              name="branch_name"
              value={formData.branch_name}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label={"branch_name"} />
          </div>
          <div className="mb-3">
            <Label title={"Branch Phone"} />
            <Input
              type="text"
              name="branch_phone"
              value={formData.branch_phone}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label={"branch_phone"} />
          </div>
          <div className="mb-3">
            <Label title={"Branch Email"} />
            <Input
              type="email"
              name="branch_email"
              value={formData.branch_email}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label={"branch_email"} />
          </div>
          <div className="mb-3">
            <Label title={"Branch Address"} />
            <TextArea
              rows="4"
              id="message"
              name="branch_address"
              value={formData.branch_address}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label={"branch_address"} />
          </div>
          <div className="mb-3">
            <Label title={"Branch Location"} />
            <Input
              type="text"
              name="branch_location"
              value={formData.branch_location}
              onChange={handleChange}
            />
            <FormValidationErrorMsg
              errorMsg={error}
              label={"branch_location"}
            />
          </div>
          <div className="mb-3">
            <Label title={"Branch Status"} />
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={statusOptions}
              placeholder="Select Status"
            />
            <FormValidationErrorMsg errorMsg={error} label={"status"} />
          </div>
          <div className="mb-3">
            <Label title={"Branch Open Date"} />
            <Input
              type="date"
              name="open_date"
              value={formatDate(formData.open_date)}
              onChange={handleChange}
            />
            <FormValidationErrorMsg errorMsg={error} label={"open_date"} />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
};

export default BranchForm;
