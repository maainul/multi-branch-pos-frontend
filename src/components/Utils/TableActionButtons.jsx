import React from "react";
import { useNavigate } from "react-router-dom";

const TableActionButtons = ({ updateAction, deleteAction, showAction }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="text-green-500 hover:underline"
        onClick={() => navigate(`${showAction}`)}
      >
        Show
      </button>
      <button
        className="text-blue-500 hover:underline ml-4"
        onClick={() => navigate(`${updateAction}`)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:underline ml-4"
        onClick={navigate(`${deleteAction}`)}
      >
        Delete
      </button>
    </>
  );
};

export default TableActionButtons;
