import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { ptBR } from './ptBR';
import { it } from './it';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import moment from 'moment';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ptBr',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        if (value instanceof Date) {
          return moment(value).format(format);
        }
      },
    },
    resources: { it, en, fr, es, ptBR },
  });

export default i18n;