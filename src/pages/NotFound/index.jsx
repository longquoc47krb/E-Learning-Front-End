import React from "react";
import * as SC from "../../components/containers/styledComponents";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section classNaem="error">
      <div className="error__content">
        <div className="error__message message">
          <h1 className="message__title">{t("not-found")}</h1>
          <p className="message__text">{t("not-found-paragraph")}</p>
        </div>
        <div className="error__nav">
          <SC.Button onClick={() => navigate("/")} fsize="24px">
            {t("home")}
          </SC.Button>
        </div>
      </div>
    </section>
  );
}
