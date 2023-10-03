import React, { useContext, useEffect, useState } from "react";
import AmountInput from "./components/AmountInput";
import CountrySelect from "./components/CountrySelect";
import CurrencySwitch from "./components/CurrencySwitch";
import "./App.css";
import { CurrencyContext } from "./context/CurrencyContext";

const App = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    initialAmount,
    setInitialAmount,
  } = useContext(CurrencyContext);
  // console.log(initialAmount);

  const [currencyRate, setCurrencyRate] = useState("");
  const fromCurrencyCode = fromCurrency.split(" ")[0];
  const toCurrencyCode = toCurrency.split(" ")[0];
  // console.log(currencyRate)

  const fetchData = async () => {
    const api = await fetch(
      `http://apilayer.net/api/live?access_key=969edc7244de2a2f003eeda80ee86e5c&currencies=${toCurrencyCode}&source=${fromCurrencyCode}&format=1`
    );
    const data = await api.json();
    setCurrencyRate(data.quotes[fromCurrencyCode + toCurrencyCode]);
  };

  useEffect(() => {
    if (initialAmount) {
      fetchData();
    }
  }, [initialAmount, fromCurrency, toCurrency]);

  return (
    <div className=" container mx-auto bg-white rounded p-20 shadow">
      <h1 className=" text-2xl font-bold text-center mb-4">
        Currency Exchange Calculator
      </h1>
      <p className=" text-center font-bold bg-blue-700 text-white rounded p-3 mb-4 shadow">
        {(initialAmount ? initialAmount : "0.00") +
          fromCurrencyCode +
          " = " +
          (currencyRate * initialAmount).toFixed(2) +
          toCurrencyCode}
      </p>
      <div className=" flex flex-col gap-4">
        <AmountInput />
        <CountrySelect
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <CurrencySwitch />
        <CountrySelect value={toCurrency} setValue={setToCurrency} label="To" />
      </div>
    </div>
  );
};

export default App;
