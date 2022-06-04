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
export function Register() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.signupContainer}>
      <Paper className={style.signUpform} elevation={16}>
        <form>
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
