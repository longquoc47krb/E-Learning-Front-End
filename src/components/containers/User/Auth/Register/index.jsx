import React, { useRef, useState } from "react";
import style from "./../Auth.module.scss";
import * as SC from "./../../../styledComponents";
import { Paper } from "@mui/material";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";
export function Register() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <div className={style.signupContainer}>
      <Paper className={style.signUpform} elevation={16}>
        <form action="#">
          <SC.Typo fsize="2rem" fw="800" transform="uppercase" mg="0 0 2rem 0">
            {t("create-account")}
          </SC.Typo>
          <div className={style.InputContainer} id="signin">
            <label>{t("full-name")}</label>
            <Input
              size="large"
              placeholder={t("full-name")}
              prefix={<AiOutlineMail className={style.fullName} />}
            />
            <label>{t("Email")}</label>
            <Input
              size="large"
              placeholder="Email"
              prefix={<AiOutlineMail className={style.email} />}
            />
            <label>{t("password")}</label>
            <Input.Password
              size="large"
              placeholder={t("password")}
              prefix={<AiOutlineLock className={style.password} />}
              iconRender={(visible) =>
                visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />
            <label>{t("re-type-password")}</label>
            <Input.Password
              size="large"
              placeholder={t("re-type-password")}
              prefix={<AiOutlineLock className={style.repassword} />}
              iconRender={(visible) =>
                visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            />
            <label>{t("update-avatar")}</label>
          </div>
          <SC.Button mg="1rem 0 1rem 0" width="50%">
            {t("signup")}
          </SC.Button>
          <div className={style.goToSignIn}>
            <SC.Typo>{t("already-account")}</SC.Typo>
            <Link to="/auth/signin">{t("signin")}</Link>
          </div>
        </form>
      </Paper>
    </div>
  );
}
