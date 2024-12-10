import React from "react";
import { useNavigate } from "react-router-dom";
import StatusCmp from "../Utils/StatusCmp";
import TableActionButtons from "../Utils/TableActionButtons";
import moment from "moment";

const BankAccountList = ({ bankAccounts }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Account Type</th>
              <th className="py-3 px-6 text-left">Account Holder Name</th>
              <th className="py-3 px-6 text-left">Account Number</th>
              <th className="py-3 px-6 text-left">Total Amount</th>
              <th className="py-3 px-6 text-left">Open Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-normal">
            {bankAccounts.map((ba) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={ba._id}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {ba.accountType}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {ba.accountHolder}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {ba.accountNumber}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {ba.totalAmount}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {moment(ba.openDate).format("MMMM Do YYYY")}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <StatusCmp status={ba.status} />
                </td>
                <td className="py-3 px-6 text-center">
                  {/* <TableActionButtons
                    showAction={`/bank-accounts/${ba._id}`}
                    updateAction={`/bank-accounts/update/${ba._id}`}
                    deleteAction={`/bank-accounts/update/${ba._id}`}
                  /> */}
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => navigate(`/bank-account/show/${ba._id}`)}
                  >
                    Show
                  </button>
                  <button
                    className="text-blue-500 hover:underline ml-4"
                    onClick={() => navigate(`/bank-account/update/${ba._id}`)}
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

export default BankAccountList;
