import React, { useState } from "react";
import { useTranslation } from "react-i18next";
//import ReactCountryFlag from "react-country-flag";
import { CircleFlag } from "react-circle-flags";
import { Select } from "antd";
import "./Languages.module.scss";
const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const { Option } = Select;
  const handleChange = (value) => {
    i18n.changeLanguage(value);
    setLang(value);
    setToggle(false);
    localStorage.setItem("lang", value);
  };
  return (
    <>
      <Select
        defaultValue={localStorage.getItem("i18nextLng") == "EN" ? "EN" : "VN"}
        onChange={handleChange}
        style={{
          width: "auto",
          zIndex: "999",
          backgroundColor: "transparent",
          bordered: false,
        }}
        title={
          localStorage.getItem("i18nextLng") == "EN"
            ? t("translation.EN")
            : t("translation.VN")
        }
      >
        <Option value="EN">
          <CircleFlag
            countryCode="gb"
            height="32"
            title={t("translation.EN")}
          />
        </Option>
        <Option value="VN">
          <CircleFlag
            countryCode="vn"
            height="32"
            title={t("translation.VN")}
          />
        </Option>
      </Select>
    </>
  );
};

export default LanguageSelect;
