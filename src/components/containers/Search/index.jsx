import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
export const Search = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://provinces.open-api.vn/api/?depth=2"
        );
        setSuggestions(res.data);
        console.log(suggestions);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div style={{ width: 400 }}>
      <ReactSearchAutocomplete
        items={suggestions}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
};
