import Button from "../Layouts/form/Button";
import Label from "../Layouts/form/label";
import Input from "../Layouts/form/Input";
import Select from "../Layouts/form/Select";
import { useParams } from "react-router-dom";
import TextArea from "../Layouts/form/TextArea";
import React, { useEffect, useState } from "react";
import { statusOptions } from "../../utils/status";
import { formatDate } from "../../utils/formatDate";
import { getBranchDetails, updateBranch } from "../../services/branchService";

const BranchUpdate = () => {
  const { id } = useParams();
  const [branchDetails, setBranchDetails] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await getBranchDetails(id);
        setBranchDetails(response.data);
        setError(null);
      } catch (error) {
        console.log("Error fetching branch details : ", error);
        setError("Failed to fetch branch details.");
      }
    };
    fetchBranch();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBranch = await updateBranch(id, branchDetails);
      setBranchDetails(updatedBranch.data);
      setSuccessMessage("Branch updated successfully");
      setError(null);
    } catch (error) {
      console.log("Error updating branch:", error);
      setError("Failed to update branch");
    }
  };

  return (
    <>
      <div className="pt-2 ">
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
        {branchDetails && (
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg"
            >
              <div className="mb-3">
                <Label title={"Branch Name"} />
                <Input
                  name="branch_name"
                  value={branchDetails.branch_name || ""}
                  onChange={handleChange}
                />
                {error}
              </div>
              <div className="mb-3">
                <Label title={"Branch Phone"} />
                <Input
                  type="text"
                  name="branch_phone"
                  value={branchDetails.branch_phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title={"Branch Email"} />
                <Input
                  type="email"
                  name="branch_email"
                  value={branchDetails.branch_email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title={"Branch Address"} />
                <TextArea
                  rows="4"
                  id="message"
                  name="branch_address"
                  value={branchDetails.branch_address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title={"Branch Location"} />
                <Input
                  type="text"
                  name="branch_location"
                  value={branchDetails.branch_location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Label title={"Branch Status"} />
                <Select
                  name="status"
                  value={branchDetails.status}
                  onChange={handleChange}
                  options={statusOptions}
                  placeholder="Select Status"
                />
              </div>
              <div className="mb-3">
                <Label title={"Branch Open Date"} />
                <Input
                  type="date"
                  name="open_date"
                  value={formatDate(branchDetails.open_date)}
                  onChange={handleChange}
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

export default BranchUpdate;
