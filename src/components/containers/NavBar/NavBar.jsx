import React, { useState, useEffect } from "react";
//import { Link, withRouter } from "react-router-dom";
import { ButtonCustom as Button } from "./../../presentational/Button/Button";
import style from "./NavBar.module.scss";
import logo from "./assets/images/logo.png";
import { GrCart, GrMenu } from "react-icons/gr";
import "antd/dist/antd.css";
import { MenuItems } from "./MenuItems";
import LanguageSelect from "./../LanguageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";
import "../../../services/i18n";
import * as SC from "./../../presentational/components";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <SC.HeaderContainer pos="sticky">
      <SC.Brand Img={logo} bg="transparent" h="100%" w="auto" />
      <SC.MenuContainer className={style.menuContainer}>
        {MenuItems.map((item) => (
          <SC.MenuItem fw="600" className={style.menuItem}>
            {t(item.title)}
          </SC.MenuItem>
        ))}
        <GrCart className={style.cart} />
        <SC.LanguagueContainer>
          <LanguageSelect />
        </SC.LanguagueContainer>
        <SC.Button radius="25px">{t("join")}</SC.Button>
      </SC.MenuContainer>
      <GrMenu className={style.menuToggle} />
    </SC.HeaderContainer>
  );
};
export default NavBar;
