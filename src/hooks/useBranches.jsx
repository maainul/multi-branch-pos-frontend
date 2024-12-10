import { useEffect, useState } from "react";
import { listBranches } from "../services/branchService";

const useBranches = () => {
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranchList = async () => {
      try {
        const branchData = await listBranches();
        setBranches(branchData.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBranchList();
  }, []);

  return { branches, error, loading };
};

export default useBranches;
