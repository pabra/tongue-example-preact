import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useLogStore } from './LogTable';
import './styles.scss';
import { languages, Translate, useSetLanguage } from './translate';
import { flags } from './utils';

const SetLanguage: FunctionalComponent = () => {
  const componentName = SetLanguage.name;
  const setLanguage = useSetLanguage();
  Object.keys(flags).forEach(k => k);

  // start render logging
  const logRender = useLogStore('justSetter');
  useEffect(() => logRender(componentName));
  // end render logging

  return (
    <fieldset>
      <legend>{componentName}</legend>
      <p className="small">
        <Translate entry="describe-SetLanguage" />
      </p>
      <div>
        {languages.map(lang => (
          <button key={lang} type="button" onClick={() => setLanguage(lang)}>
            {flags[lang]}
          </button>
        ))}
      </div>
    </fieldset>
  );
};

export default SetLanguage;
