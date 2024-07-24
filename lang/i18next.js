import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import esp from './esp.json';
import ita from './ita.json';

export const languageResources = {
  EN: {translation: en},
  FR: {translation: fr},
  ESP: {translation: esp},
  ITA: {translation: ita}
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'fr',
  fallbackLng: 'fr',
  resources: languageResources,
});

export default i18next;