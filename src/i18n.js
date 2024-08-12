import { createI18n } from "vue-i18n";

// Import tłumaczeń
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const messages = {
  en,
  pl,
};

const savedLanguage = localStorage.getItem("language") || "pl";

const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: "pl",
  messages,
});

export default i18n;
