import React, { useState } from "react";
import style from "./NavBar.module.scss";
import logo from "./assets/images/logo.png";
import { GrCart, GrMenu } from "react-icons/gr";
import { Badge, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { MenuItems } from "./MenuItems";
import { Search } from "./../../containers";
import { CategoryList } from "./../Categories/CategoryList";
import LanguageSelect from "../LanguageSelect";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
  gap: ${(props) => (props.gap ? props.gap : "0 auto")};
  justify-content: space-between;
`;
export const Brand = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  cursor: pointer;
  width: ${(props) => (props.w ? props.w : "1rem")};
  height: ${(props) => (props.h ? props.h : "1rem")};
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
`;
export const MenuContainer = styled.div`
  align-items: center;
  z-index: 10;
  height: 100%;
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : "0 1.5rem")};
`;
export const MenuItem = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;
  text-transform: capitalize;
  font-size: ${(props) => (props.fsize ? props.fsize : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
`;
export const LanguagueContainer = styled.div`
  padding-left: 10px;
  border-left: 2px solid rgb(238, 238, 238);
  height: 35px;
`;
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ca786d",
    },
  },
});

export const NavBar = () => {
  // const [avtBG, setAvtBG] = useState("#ca786d");
  const [isAuth, setAuth] = useState(true);
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleCount = () => {
    setCount(count + 1);
    console.log("Count: " + count);
  };
  function avatarColor(string) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let color = "#";

    color += randomColor;
    /* eslint-enable no-bitwise */
    return color;
  }
  function stringAvatar(name) {
    const lastElement = (str) => {
      return str.split(" ").length;
    };
    return {
      sx: {
        bgcolor: avatarColor(name),
      },
      children: `${name.split(" ")[lastElement(name) - 2][0]}${
        name.split(" ")[lastElement(name) - 1][0]
      }`,
    };
  }

  return (
    <HeaderContainer pos="sticky">
      <Brand
        Img={logo}
        bg="transparent"
        h="100%"
        w="auto"
        onClick={() => navigate("/")}
      />
      <Search />
      <MenuContainer className={style.menuContainer}>
        {MenuItems.map((item) => (
          <MenuItem fw="600" className={style.menuItem}>
            {t(item.title)}
          </MenuItem>
        ))}
        <ThemeProvider theme={theme}>
          <Badge badgeContent={count} color="primary" max={99}>
            <GrCart className={style.cart} />
          </Badge>
        </ThemeProvider>
        <LanguagueContainer>
          <LanguageSelect />
        </LanguagueContainer>
        {isAuth ? (
          <Avatar {...stringAvatar("Leo Messi")} />
        ) : (
          <SC.Button onClick={handleCount} radius="25px">
            {t("join")}
          </SC.Button>
        )}
      </MenuContainer>
      <GrMenu className={style.menuToggle} />
    </HeaderContainer>
  );
};
