import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationVN from "./locales/vn/translation.json";

// the translations
const resources = {
  EN: {
    translation: translationEN,
  },
  VN: {
    translation: translationVN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") ?? "VN",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
