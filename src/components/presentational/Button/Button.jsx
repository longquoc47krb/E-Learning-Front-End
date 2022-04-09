import { Button } from "antd";
import { useState } from "react";
import style from "./button.module.scss";
export const ButtonCustom = ({
  backgroundcolor = "#ca786d",
  uppercase = false,
  color = "#fff",
  backgroundcolorhover = "#9e3021",
  radius,
  padding = "5px 10px",
  type = "button",
  disabled,
  width = "auto",
  height = "auto",
  fontSize,
  fontWeight,
  border = "1px solid transparent",
  textTransform,
  children,
  ...props
}) => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: backgroundcolor,
    color: color,
    borderRadius: radius,
    width: width,
    height: height,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textTransform: uppercase ? "uppercase" : "",
    padding: padding,
    border: border,
    textTransform: textTransform,
  };

  const styleHover = {
    backgroundColor: backgroundcolorhover,
  };

  return (
    <Button
      {...props}
      htmlType={type}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...style, ...(hover ? styleHover : null) }}
      className={`${style.button} ${disabled ? style.disabled : ""}`}
    >
      {children}
    </Button>
  );
};
