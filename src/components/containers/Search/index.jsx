import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { ToastContainer, toast } from "react-toastify";
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
    console.log(string, results);
    // results contains the list of results, if its length is 0, it means that nothing was found
    if (results.length === 0) {
      // or add your custom code to show the error
    }
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
