import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useLogStore } from './LogTable';
import './styles.scss';
import {
  languages,
  Translate,
  translate,
  useLanguage,
  useTranslate,
} from './translate';
import { flags, isInArray } from './utils';

const SelectLanguage: FunctionalComponent = () => {
  const componentName = SelectLanguage.name;
  const [language, setLanguage] = useLanguage();
  const { translate: t } = useTranslate();
  const handleSelect = (lang: string) => {
    setLanguage(isInArray(languages, lang) ? lang : 'en');
  };
  const titles = {
    en: `${t('lang-en')} (${translate('en', 'lang-en')})`,
    de: `${t('lang-de')} (${translate('de', 'lang-de')})`,
    es: `${t('lang-es')} (${translate('es', 'lang-es')})`,
    fr: `${t('lang-fr')} (${translate('fr', 'lang-fr')})`,
  } as const;

  // start render logging
  const logRender = useLogStore('justSetter');
  useEffect(() => logRender(componentName));
  // end render logging

  return (
    <fieldset>
      <legend>{componentName}</legend>
      <p className="small">
        <Translate entry="describe-SelectLanguage" />
      </p>
      <div>
        <select
          value={language}
          onChange={ev =>
            ev.target && handleSelect((ev.target as HTMLSelectElement).value)
          }
        >
          {languages.map(lang => (
            <option key={lang} value={lang} title={titles[lang]}>
              {flags[lang]}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
};

export default SelectLanguage;
