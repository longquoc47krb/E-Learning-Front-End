import styled from "styled-components";
import { css } from "styled-components";
import "./../containers/NavBar/assets/images/logo.png";

export const Button = styled.button`
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: auto;
  border-radius: ${(props) =>
    props.radius ? props.radius : props.theme.radius};
  background-color: ${(props) =>
    props.bg ? props.bg : props.theme.primaryColor};
  font-size: ${(props) => (props.fsize ? props.fsize : "16px")};
  color: ${(props) => (props.color ? props.color : props.theme.fontColor)};
  text-transform: uppercase;
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  &:hover {
    background-color: #9e3021;
  }
`;
Button.defaultProps = {
  theme: {
    primaryColor: "#ca786d",
    fontColor: "#fff",
    radius: "0",
  },
};
export const theme = {
  primaryColor: "#ca786d",
  fontColor: "#fff",
  radius: "0",
};
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

export const Typo = styled.p`
  font-size: ${(props) => (props.fsize ? props.fsize : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  padding: ${(props) => (props.pd ? props.pd : "0")};
  margin: ${(props) => (props.mg ? props.mg : "0")};
  text-transform: ${(props) => (props.transform ? props.transform : "none")};
  border-left: ${(props) => (props.bdLeft ? props.bdLeft : "none")};
  display: ${(props) => (props.display ? props.display : "static")};
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
export const CategoriesContainer = styled.div`
  padding: 0 1rem;
  display: ${(props) => (props.display ? props.display : "static")};
`;
export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem 2rem;
  margin: ${(props) => (props.mg ? props.mg : "0")};
  padding: ${(props) => (props.pd ? props.pd : "0")};
`;
// export const CategoryItem = styled.div`
//   padding: 20px;
//   font-size: 30px;
//   text-align: center;
//   background-color: #2196f3;
//   width: ${(props) => (props.w ? props.w : "auto")};
//   height: ${(props) => (props.h ? props.h : "auto")};
//   margin: ${(props) => (props.mg ? props.mg : "0.3em 0.3em")};
// `;
