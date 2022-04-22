import { AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
export const Search = () => {
  const [value, setValue] = useState("");
  // const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (data) => {
    setValue(data);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const onSearch = (searchText) => {
    // setOptions(!searchText ? [] : options);
  };
  const options = [
    {
      name: "long",
    },
    {
      name: "quoc",
    },
  ];
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://provinces.open-api.vn/api/?depth=2"
  //       );
  //       setOptions(res.data);
  //       console.log(options);
  //     } catch {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);
  const { t } = useTranslation();
  return (
    <>
      <AutoComplete
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </>
  );
};
