export const formatBranchSelect = (branches) => {
  // Return an empty array if branches is not valid
  if (!branches || !Array.isArray(branches)) return [];

  return branches.map((branch) => ({
    value: branch._id,
    label: `${branch.branch_name} - ${branch.branch_address}`,
  }));
};
