import React, { useEffect } from "react";

const log = (e) => {
  console.log(e.target.value);
};

const Montant = ({ ...inputProps }) => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <>
      <div className="input-field col s12">
        <input id="amount" type="text" className="" {...inputProps} />
        <span
          className="helper-text"
          data-error="Erreur"
          data-success="Valide"
        ></span>
        <label htmlFor="amount">Montant</label>
      </div>
    </>
  );
};

export default Montant;
