import React from "react";

const select = ({ myLabel, ...inputProps }) => {
  /* const affichage = (e) => {
    console.log(e.target.value);
  };
 */
  return (
    <div className="col s6">
      <label>{myLabel}</label>
      <select
        {...inputProps}
        className="browser-default"
        name="outputDevises"
        id="outputDevises"
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default select;
