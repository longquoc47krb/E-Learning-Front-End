import React from "react";
import style from "./../Auth.module.scss";
import * as SC from "./../../../styledComponents";
import { AiOutlineMail } from "react-icons/ai";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
export function ForgetPassword() {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: ''
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <div className={style.forgetPasswordContainer}>
      <SC.Typo fsize="2rem" fw="800" transform="uppercase" pd="1rem 0">
        {t("reset-password")}
      </SC.Typo>
      <SC.Typo>{t("enter-email")}</SC.Typo>
      <form onSubmit={handleSubmit(onSubmit)>
        <div className={style.InputContainer}>
          <Input
            size="large"
            placeholder="Email"
            prefix={<AiOutlineMail className={style.email} />}
          />

          <SC.Button>{t("send")}</SC.Button>
        </div>
      </form>
    </div>
  );
}
