import React from "react";
import { useNavigate } from "react-router-dom";

const BranchList = ({ branches }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Branch Name</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-normal">
            {branches.map((branch) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={branch._id}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {branch.branch_name}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {branch.branch_phone}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {branch.branch_email}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {branch.branch_location}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {branch.status}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => navigate(`/branch/${branch._id}`)}
                  >
                    Show
                  </button>
                  <button
                    className="text-blue-500 hover:underline ml-4"
                    onClick={() => navigate(`/branch/update/${branch._id}`)}
                  >
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline ml-4">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BranchList;
