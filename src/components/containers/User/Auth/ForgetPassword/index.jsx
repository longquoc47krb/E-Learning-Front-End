import React, { useState } from "react";
import style from "./../Auth.module.scss";
import * as SC from "./../../../styledComponents";
import { AiOutlineMail } from "react-icons/ai";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export function ForgetPassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const notify = () => {
    toast.success(t("send-to-email-success"), {
      icon: "🚀",
    });
  };
  const forgetSchema = yup.object().shape({
    email: yup.string().email(t("emailInvalid")).required(t("emailRequired")),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgetSchema) });

  const onSubmit = () => {
    setSubmitted(true);
  };
  return (
    <div className={style.forgetPasswordContainer}>
      <SC.Typo fsize="2rem" fw="800" transform="uppercase" pd="1rem 0">
        {t("reset-password")}
      </SC.Typo>
      {submitted ? (
        <>
          <SC.Typo>{t("verify-email-paragraph")}</SC.Typo>
          <SC.Button onClick={() => navigate("/auth/signin")} fsize="24px">
            {t("signin")}
          </SC.Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      ) : (
        <>
          <SC.Typo>{t("enter-email")}</SC.Typo>
          <form
            className={style.InputContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Email"
                  prefix={<AiOutlineMail className={style.email} />}
                />
              )}
            />
            <SC.Button onClick={notify}>{t("send")}</SC.Button>
            {/* {submitted && !errors.email && (
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            )} */}
          </form>
          {errors.email ? (
            <label className="text-danger" htmlFor="email">
              *{errors.email?.message}
            </label>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}
