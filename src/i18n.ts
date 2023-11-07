import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          info: {
            one: "Practicing Localization",
            two: "Learn React",
          },
          title: "English Localization",
          counter_one: "Changed language just once",
          counter_other: "Language has been changed {{count}} times",
        },
      },
      np: {
        translation: {
          info: {
            one: "स्थानीयकरण अभ्यास",
            two: "रियाक्त जान्नुहोस्",
          },
          title: "नेपाली स्थानीयकरण",
          counter_one: "भाषा एक  पटक परिवर्तन गरिएको छ",
          counter_other: "भाषा {{count}} पटक परिवर्तन गरिएको छ",
        },
      },
    },
  });

export default i18n;

