import React from "react";
import style from "./NotFound.module.scss";
import * as SC from "../../components/containers/styledComponents";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section classNaem={style.error}>
      <div className={style.error__content}>
        <div className={`${style.error__message} ${style.message}`}>
          <h1 className={style.message__title}>{t("not-found")}</h1>
          <p className={style.message__text}>{t("not-found-paragraph")}</p>
        </div>
        <div className={`${style.error__nav}`}>
          <SC.Button onClick={() => navigate("/")} fsize="24px">
            {t("home")}
          </SC.Button>
        </div>
      </div>
    </section>
  );
}
