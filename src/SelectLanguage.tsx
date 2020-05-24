import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import styles from './index.module.css';
import { languages, useLanguage } from './translate';
import { flags, isInArray, useLogStore } from './utils';

const SelectLanguage = () => {
  const [language, setLanguage] = useLanguage();
  const handleSelect = (lang: string) => {
    setLanguage(isInArray(languages, lang) ? lang : 'en');
  };

  useEffect(() => useLogStore('justSetter')(SelectLanguage.name));

  return (
    <div className={styles.root}>
      <p>will re-render</p>
      <select
        value={language}
        onChange={ev =>
          ev.target && handleSelect((ev.target as HTMLSelectElement).value)
        }
      >
        {languages.map(lang => (
          <option value={lang}>{flags[lang]}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectLanguage;
