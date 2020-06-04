import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useLogStore } from './LogTable';
import './styles.scss';
import { languages, Translate, useLanguage } from './translate';
import { flags, isInArray } from './utils';

const SelectLanguage: FunctionalComponent = () => {
  const componentName = SelectLanguage.name;
  const [language, setLanguage] = useLanguage();
  const handleSelect = (lang: string) => {
    setLanguage(isInArray(languages, lang) ? lang : 'en');
  };

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
            <option key={lang} value={lang} title={lang}>
              {flags[lang]}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
};

export default SelectLanguage;
