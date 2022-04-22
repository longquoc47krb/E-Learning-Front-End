import React from "react";
import style from "./../Auth.module.scss";
import * as SC from "./../../../styledComponents";
import Facebook from "./../../../../../assets/facebook.svg";
import Google from "./../../../../../assets/google.svg";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Paper } from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
export function SignIn() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    password: Yup.string()
      .min(3, t("passwordMin"))
      .required(t("passwordRequired")),
  });
  return (
    <div className={style.signinContainer}>
      <Paper elevation={16} className={style.signinForm}>
        <SC.Typo fsize="2rem" fw="800" transform="uppercase" pd="1rem 0">
          {t("signin")}
        </SC.Typo>
        <div className={style.InputContainer}>
          <label>Email</label>
          <Input
            size="large"
            placeholder="Email"
            prefix={<AiOutlineMail className={style.email} />}
          />
          <label>{t("password")}</label>
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<AiOutlineLock className={style.password} />}
            iconRender={(visible) =>
              visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
            }
          />
        </div>
        <SC.Typo
          className={style.forget}
          onClick={() => navigate("/auth/forget-password")}
        >
          {t("forget-pw")}
        </SC.Typo>
        <SC.Button type="submit" width="70%" mg="0 0 2rem 0">
          {t("signin")}
        </SC.Button>
        <SC.Typo fw="400" mg="0 0 10px 0" className={style.middleLine}>
          {t("sign-in-with-social")}
        </SC.Typo>
        <div className={style.socialContainer}>
          <div className="social-share-item facebook">
            <FaFacebookF className="social-share-icon" />
            <span className="social-share-text">{t("login-fb")}</span>
          </div>
          <div className="social-share-item instagram">
            <FaGoogle className="social-share-icon" />
            <span className="social-share-text">{t("login-gg")}</span>
          </div>
        </div>
        <div className={style.goToSignUp}>
          <SC.Typo>{t("have-yet-account")}</SC.Typo>
          <Link to="/auth/signup">{t("signup")}</Link>
        </div>
      </Paper>
    </div>
  );
}
