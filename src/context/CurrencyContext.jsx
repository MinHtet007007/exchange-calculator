import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("USD - United States");
  const [toCurrency, setToCurrency] = useState("MMK - Myanmar");
  const [initialAmount, setInitialAmount] = useState(1);
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    initialAmount,
    setInitialAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
