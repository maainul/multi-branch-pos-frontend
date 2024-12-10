import React, { useEffect, useState } from "react";
import { listBankAccounts } from "../../services/bankService";
import BankAccountList from "./BankAccountList";

const BankAccounts = () => {
  const [bankAccounts, setBankAccount] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await listBankAccounts();
        setBankAccount(response.data);
      } catch (error) {
        setLoading(false);
        setError(error.message || "An Error Occured while fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <BankAccountList bankAccounts={bankAccounts} />
    </>
  );
};

export default BankAccounts;
