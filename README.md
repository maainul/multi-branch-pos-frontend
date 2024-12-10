import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const BranchForm = ({ initialData = {}, onSubmit, mode }) => {
const [formData, setFormData] = useState(initialData);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: value,
}));
};

const handleSubmit = (e) => {
e.preventDefault();
onSubmit(formData); // Pass form data to the parent component
};

const statusOptions = [
{ value: "1", label: "Active" },
{ value: "2", label: "Inactive" },
{ value: "3", label: "Close" },
];

return (
<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
<div className="mb-3">
<label htmlFor="branchName" className="block mb-2 text-sm font-medium">
Branch Name
</label>
<Input
type="text"
name="branch_name"
value={formData.branch_name || ""}
onChange={handleChange}
/>
</div>

      <div className="mb-3">
        <label htmlFor="branchPhone" className="block mb-2 text-sm font-medium">
          Branch Phone
        </label>
        <Input
          type="text"
          name="branch_phone"
          value={formData.branch_phone || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="branchEmail" className="block mb-2 text-sm font-medium">
          Branch Email
        </label>
        <Input
          type="text"
          name="branch_email"
          value={formData.branch_email || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="branchAddress" className="block mb-2 text-sm font-medium">
          Branch Address
        </label>
        <textarea
          rows="4"
          name="branch_address"
          value={formData.branch_address || ""}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="branchStatus" className="block mb-2 text-sm font-medium">
          Branch Status
        </label>
        <Select
          name="status"
          value={formData.status || ""}
          onChange={handleChange}
          options={statusOptions}
          placeholder="Select Status"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="openDate" className="block mb-2 text-sm font-medium">
          Open Date
        </label>
        <Input
          type="date"
          name="open_date"
          value={formData.open_date || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-3 py-2"
        >
          {mode === "edit" ? "Update Branch" : "Add Branch"}
        </button>
      </div>
    </form>

);
};

export default BranchForm;

import React from "react";
import BranchForm from "./BranchForm";
import { createBranch } from "../../services/branchService";

const AddBranch = () => {
const handleAddBranch = async (data) => {
try {
await createBranch(data);
alert("Branch added successfully!");
} catch (error) {
console.error("Error adding branch:", error);
}
};

return (
<div>
<h1 className="text-2xl font-bold mb-4">Add Branch</h1>
<BranchForm onSubmit={handleAddBranch} mode="add" />
</div>
);
};

export default AddBranch;

import React, { useEffect, useState } from "react";
import BranchForm from "./BranchForm";
import { getBranchDetails, updateBranch } from "../../services/branchService";
import { useParams } from "react-router-dom";

const UpdateBranch = () => {
const { id } = useParams();
const [branchDetails, setBranchDetails] = useState(null);

useEffect(() => {
const fetchBranch = async () => {
const response = await getBranchDetails(id);
setBranchDetails(response.data);
};
fetchBranch();
}, [id]);

const handleUpdateBranch = async (data) => {
try {
await updateBranch(id, data);
alert("Branch updated successfully!");
} catch (error) {
console.error("Error updating branch:", error);
}
};

return (
<div>
<h1 className="text-2xl font-bold mb-4">Update Branch</h1>
{branchDetails && (
<BranchForm initialData={branchDetails} onSubmit={handleUpdateBranch} mode="edit" />
)}
</div>
);
};

export default UpdateBranch;

1. Organize Imports
   Group and reorder your imports:

External dependencies (e.g., react, react-router-dom).
Services (e.g., bankService, branchService).
Components (e.g., Button, Label).
Utilities (e.g., statusOptions, formatDate).
