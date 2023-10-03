import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";

const CountrySelect = (props) => {
  const { value, setValue, label } = props;

  // console.log(value)

  const [countryList, setCountryList] = useState([]);

  const fetchData = async () => {
    const api = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await api.json();
    setCountryList(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const countryListFilter = countryList.filter((item) => "currencies" in item);
  const countryListData = countryListFilter.map((item) => {
    return `${Object.keys(item.currencies)[0]} - ${item.name.common}`;
  });

  // console.log(countryListData);

  return (
    <div className=" flex flex-col">
      <Select
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        data={countryListData}
        searchable
        withAsterisk
      />
    </div>
  );
};

export default CountrySelect;
