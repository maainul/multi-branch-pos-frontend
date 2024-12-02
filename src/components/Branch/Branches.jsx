import React, { useEffect, useState } from "react";
import BranchList from "./BranchList";
import { listBranches } from "../../services/branchService";


const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await listBranches();
        setBranches(response.data);
      } catch (error) {
        setError(error.message || "An error occured while fetching branches");
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading branches...</p>
      ) : error ? (
        <p>Error : {error}</p>
      ) : (
        <BranchList branches={branches} />
      )}
    </>
  );
};

export default Branches;
