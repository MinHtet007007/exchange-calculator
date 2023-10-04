import React, { useContext } from "react";
import { NumberInput } from "@mantine/core";
import { CurrencyContext } from "../context/CurrencyContext";

const AmountInput = () => {
  const { initialAmount, setInitialAmount } = useContext(CurrencyContext);
  const handleAmountChange = (e) => {
    setInitialAmount(e.target.value);
  };
  return (
    <div className="">
      <NumberInput
        value={initialAmount}
        onChange={handleAmountChange}
        label="Amount"
        withAsterisk
      />
    </div>
  );
};

export default AmountInput;
