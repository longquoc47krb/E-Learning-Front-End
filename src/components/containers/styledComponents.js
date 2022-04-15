import styled from "styled-components";

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
  margin: ${(props) => (props.mg ? props.mg : "0")};
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

export const Typo = styled.p`
  font-size: ${(props) => (props.fsize ? props.fsize : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  padding: ${(props) => (props.pd ? props.pd : "0")};
  margin: ${(props) => (props.mg ? props.mg : "0")};
  text-transform: ${(props) => (props.transform ? props.transform : "none")};
  border-left: ${(props) => (props.bdLeft ? props.bdLeft : "none")};
  display: ${(props) => (props.display ? props.display : "static")};
`;
