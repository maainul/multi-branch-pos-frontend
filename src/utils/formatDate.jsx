export const formatDate = (isoDate) => {
  // Handle empty or undefined values
  if (!isoDate) return "";
  const date = new Date(isoDate);
  // Extract "yyyy-MM-dd"
  return date.toISOString().split("T")[0];
};
