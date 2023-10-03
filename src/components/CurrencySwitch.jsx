import React, { useContext } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { CurrencyContext } from "../context/CurrencyContext";
import { Button } from "@mantine/core";

const CurrencySwitch = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <div className=" self-center">
      <Button variant="filled" onClick={handleSwitch}>
        <GoArrowSwitch className=" text-xl" />
      </Button>
    </div>
  );
};

export default CurrencySwitch;
