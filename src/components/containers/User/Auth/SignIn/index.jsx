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

export function SignIn() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={style.signinContainer}>
      <div className={style.signinLeft}>
        <SC.Typo fsize="2rem" fw="800" transform="uppercase">
          {t("signin")}
        </SC.Typo>
        <div className={style.InputContainer}>
          <Input
            size="large"
            placeholder="Email"
            prefix={<AiOutlineMail className={style.email} />}
          />
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
          mg="0 20% 1rem 0"
          className={style.forget}
          onClick={() => navigate("/auth/forget-password")}
        >
          {t("forget-pw")}
        </SC.Typo>
        <SC.Button width="60%" mg="0 0 2rem 0">
          {t("signin")}
        </SC.Button>
        <SC.Typo fw="400" mg="0 0 10px 0">
          {t("sign-in-with-social")}
        </SC.Typo>
        <div className={style.socialContainer}>
          <img src={Facebook} alt="" id="fb" />
          <img src={Google} alt="" id="gg" />
        </div>
        <div className={style.goToSignUp}>
          <SC.Typo>{t("already-account")}</SC.Typo>
          <Link to="/signup">{t("signup")}</Link>
        </div>
      </div>
      <div className={style.signinRight}>
        <img
          src="https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2022/2/2/messi-khoc-1643787982278949755165.jpg"
          alt=""
          className="src"
        />
      </div>
    </div>
  );
}
