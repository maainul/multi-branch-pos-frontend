import React from "react";

const Button = () => {
  return (
    <>
      <button
        type="submit"
        className="text-white bg-blue-700 rounded-lg
      hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium roulg text-sm w-full 
                sm:w-auto
                px-3 py-2 text-center dark:bg-blue-700 dark:focus:ring-blue-800
                "
      >
        Submit
      </button>
    </>
  );
};

export default Button;
