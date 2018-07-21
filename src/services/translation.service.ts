import i18next from 'i18next';
import { translations } from '../assets/i18n/en';

export class TranslationService {
  init(lang) {
    i18next.init(
      {
        lng: lang,
        debug: true,
        resources: {
          en: {
            translation: translations.translation,
          },
        },
      },
      err => {
        if (err) {
          console.error(err);
        }
      }
    );
  }

  // translate(key, params?) {
  //   return i18next.t(key, params);
  // }
}

export function translate(key, params?) {
  return i18next.t(key, params);
}
