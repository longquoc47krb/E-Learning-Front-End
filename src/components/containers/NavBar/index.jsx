import React, { useState, useEffect } from "react";
//import { Link, withRouter } from "react-router-dom";
import { ButtonCustom as Button } from "../../presentational/Button/Button";
import style from "./NavBar.module.scss";
import logo from "./assets/images/logo.png";
import { GrCart, GrMenu } from "react-icons/gr";
import "antd/dist/antd.css";
import { MenuItems } from "./MenuItems";
import LanguageSelect from "../LanguageSelect";
import { useTranslation } from "react-i18next";
import "../../../services/i18n";
import styled from "styled-components";
import * as SC from "./../styledComponents";
export const HeaderContainer = styled.div`
  position: ${(props) => (props.pos ? props.pos : "static")};
  top: 0;
  height: 4rem;
  background-color: #fff;
  z-index: 1000;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "0 30px")};
  justify-content: space-between;
`;
export const Brand = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  width: ${(props) => (props.w ? props.w : "20px")};
  height: ${(props) => (props.h ? props.h : "20px")};
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
`;
export const MenuContainer = styled.div`
  align-items: center;
  z-index: 10;
  height: 100%;
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : "0 30px")};
`;
export const MenuItem = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;
  font-size: ${(props) => (props.fsize ? props.fsize : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
`;
export const LanguagueContainer = styled.div`
  padding-left: 10px;
  border-left: 2px solid rgb(238, 238, 238);
  height: 35px;
`;
export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer pos="sticky">
      <Brand Img={logo} bg="transparent" h="100%" w="auto" />
      <MenuContainer className={style.menuContainer}>
        {MenuItems.map((item) => (
          <MenuItem fw="600" className={style.menuItem}>
            {t(item.title)}
          </MenuItem>
        ))}
        <GrCart className={style.cart} />
        <LanguagueContainer>
          <LanguageSelect />
        </LanguagueContainer>
        <SC.Button radius="25px">{t("join")}</SC.Button>
      </MenuContainer>
      <GrMenu className={style.menuToggle} />
    </HeaderContainer>
  );
};
