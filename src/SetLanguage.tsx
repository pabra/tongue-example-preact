import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import styles from './index.module.css';
import { languages, useSetLanguage } from './translate';
import { flags, useLogStore } from './utils';

const SetLanguage = () => {
  const setLanguage = useSetLanguage();
  Object.keys(flags).forEach(k => k);

  useEffect(() => useLogStore('justSetter')(SetLanguage.name));

  return (
    <div className={styles.root}>
      <p>will not re-render</p>
      {languages.map(lang => (
        <button onClick={() => setLanguage(lang)}>{flags[lang]}</button>
      ))}
    </div>
  );
};

export default SetLanguage;
