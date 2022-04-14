import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
export const Search = () => {
  const { Search } = Input;
  const { t } = useTranslation();
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder={t("search-placeholder")}
      onSearch={onSearch}
      style={{ width: "auto" }}
    />
  );
};
