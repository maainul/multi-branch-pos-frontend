import React, { useEffect, useState } from "react";
import BranchList from "./BranchList";
import useBranches from "../../hooks/useBranches";

const Branches = () => {
  const { branches, error, loading } = useBranches();

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
