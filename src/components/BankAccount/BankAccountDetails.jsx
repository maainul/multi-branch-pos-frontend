import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBankAccountDetails } from "../../services/bankService";
import moment from "moment";
import { formatDate } from "../../utils/formatDate";

const BankAccountDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [bankAccountDetails, setBankAccountDetails] = useState(null);

  useEffect(() => {
    const showBankAccount = async () => {
      try {
        const response = await getBankAccountDetails(id);
        console.log(response.data);
        setBankAccountDetails(response.data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    showBankAccount();
  }, []);

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {bankAccountDetails && (
        <div>
          <h2> ID : {bankAccountDetails._id}</h2>
          <h2>Account Holder Name : {bankAccountDetails.accountHolder}</h2>
          <h2>Account Number :{bankAccountDetails.accountNumber}</h2>
          <h2>
            Created Date :{" "}
            {moment(bankAccountDetails.createdAt).format("MMMM Do YYYY")}
          </h2>
          <h2>
            Open Date :{" "}
            {moment(bankAccountDetails.openDate).format("MMMM Do YYYY")}
          </h2>
          <h2>Status : {bankAccountDetails.status}</h2>
          <h2>Total Amount : {bankAccountDetails.totalAmount}</h2>
          <h2>
            Update Date Time :{" "}
            {moment(bankAccountDetails.updatedAt).format("MMMM Do YYYY")}
          </h2>
        </div>
      )}
    </>
  );
};

export default BankAccountDetails;
