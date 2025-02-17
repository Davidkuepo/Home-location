import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../i18n/locales/en.json';
import translationFR from '../i18n/locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR }
    },
    lng: 'en', // default language
    fallbackLng: 'en', 
    interpolation: { escapeValue: false }
  });

export default i18n;