import React from "react";
import style from "./../Auth.module.scss";
import * as SC from "./../../../styledComponents";
import { AiOutlineMail } from "react-icons/ai";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
export function ForgetPassword() {
  const { t } = useTranslation();
  return (
    <div className="forgetPasswordContainer">
      <SC.Typo>{t("enter-email")}</SC.Typo>
      <Input
        size="large"
        placeholder="Email"
        prefix={<AiOutlineMail className={style.email} />}
      />
    </div>
  );
}
