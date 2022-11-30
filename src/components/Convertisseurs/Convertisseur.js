import Select from "./Select/Select";
import Montant from "./Montant/Montant";
import Spinner from "../Spinner";
import React, { useState } from "react";

const calcule = (montant, taux) => {
  if (montant) {
    return montant * taux;
  }
  return 0;
};

const verificationValue = (valeur, regex) => {
  return valeur.match(regex) || valeur === "";
};

const gestionZeroDebut = (valeur) => {
  if (valeur !== "0" && valeur !== "00") {
    return valeur.replace(/^0+/, "");
  }
  return "0";
};

const Convertisseur = () => {
  const [montant, setMontant] = useState("0");
  const [result, setResult] = useState(0);
  const [currency, setCurrency] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [to, setTo] = useState("EUR");
  const [from, setFrom] = useState("EUR");

  const fetchCurrency = async (myFrom, myTo) => {
    setLoading(true);
    if (myFrom != myTo) {
      const result = await fetch(
        "https://react-starter-api.vercel.app/api/convert/" +
          myFrom +
          "&currencies=" +
          myTo
      );
      const data = await result.json();
      setCurrency(data.data[myTo].value);
      setCurrency(data.data[myTo].value);
      //calcule ici car problèmme de synchronisation avec les useState
      setResult(calcule(parseFloat(montant), data.data[myTo].value));
    } else {
      setCurrency(1);
      setResult(parseFloat(montant));
    }
    setLoading(false);
  };

  const handleChangeMontant = (e) => {
    setMontant(gestionZeroDebut(e?.target?.value));
    console.log(e?.target?.value);
    if (verificationValue(e?.target?.value, /[A-z\s_-]/)) {
      document.getElementById("amount").setAttribute("class", "invalid");
      setResult(0);
    } else {
      document.getElementById("amount").setAttribute("class", "valid");
      setResult(calcule(parseFloat(e?.target?.value), currency));
    }
  };

  const handleChangeFrom = (e) => {
    if (document.getElementById("amount").getAttribute("class") === "valid") {
      setFrom(e?.target?.value);
      fetchCurrency(e?.target?.value, to);
    }
  };

  const handleChangeTo = (e) => {
    if (document.getElementById("amount").getAttribute("class") === "valid") {
      setTo(e?.target?.value);
      fetchCurrency(from, e?.target?.value);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h3>Convertisseur</h3>
        <div className="col s8">
          <div className="row">
            <Select
              myLabel="From"
              onChange={handleChangeFrom}
              defaultValue={from}
            />
            <Select myLabel="To" onChange={handleChangeTo} defaultValue={to} />
          </div>
          <div className="row">
            <Montant value={montant} onChange={handleChangeMontant} />
            <div className="input-field col s12">
              <h5>Result : {isLoading ? <Spinner /> : result}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertisseur;
