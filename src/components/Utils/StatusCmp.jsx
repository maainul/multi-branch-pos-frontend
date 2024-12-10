import React from "react";

const StatusCmp = ({status}) => {
  return (
    <>
      {status && status === 1 ? (
        <p className="text-green-500 bg-green-200 text-center p-1 rounded-lg font-bold">
          Active
        </p>
      ) : (
        <p className="text-red-500 bg-red-200 text-center p-1 rounded-lg font-bold">
          Close
        </p>
      )}
    </>
  );
};

export default StatusCmp;
