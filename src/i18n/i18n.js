import i18next from 'i18next';
import translationsEn from '../locales/en/translations.json';
import translationsSr from '../locales/sr/translations.json';
import translationsSrCir from '../locales/cir/translations.json';

const resources = {
  en: {
    translations: translationsEn,
  },
  sr: {
    translations: translationsSr,
  },
  cir: {
    translations: translationsSrCir,
  },
};

i18next.init({
  fallbackLng: 'sr',
  resources,
  lng: 'sr',
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  // debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['sr', 'en', 'cir'];

export default i18next;
