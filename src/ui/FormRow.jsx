import React from "react";

const FormRow = ({ label, children, error }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-semibold text-gray-600 ml-1">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormRow;
