import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getBranchDetails } from "../../services/branchService";

const BranchDetails = () => {
  const { id } = useParams();
  const [branchDetails, setBranchDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const showBranch = async () => {
      try {
        const response = await getBranchDetails(id);
        setBranchDetails(response.data);
        setError(null);
      } catch (error) {
        console.log("Error fetching branch details : ", error);
      }
    };
    showBranch();
  }, [id]);

  return (
    <>
      <div>{error && <p className="text-red-500">{error}</p>}</div>
      {branchDetails && (
        <div>
          <h2>{branchDetails.branch_name}</h2>
          <h2>{branchDetails.branch_phone}</h2>
          <h2>{branchDetails.branch_email}</h2>
          <h2>{branchDetails.branch_address}</h2>
          <h2>{branchDetails.branch_location}</h2>
          <p>{branchDetails.status}</p>
        </div>
      )}
    </>
  );
};

export default BranchDetails;
