import '@exampledev/new.css';
import { h, render } from 'preact';
import { useEffect } from 'preact/hooks';
import LogTable, { useLogStore } from './LogTable';
import SelectLanguage from './SelectLanguage';
import SetHtmlLanguage from './SetHtmlLanguage';
import SetLanguage from './SetLanguage';
import { Translate } from './translate';

const rootEl = window.document.getElementById('root');

if (!rootEl) {
  throw new Error('root element with id "root" not found');
}

const App = () => {
  // start render logging
  const logRender = useLogStore('justSetter');
  useEffect(() => logRender(App.name));
  // end render logging

  return (
    <div>
      <header>
        <h1>
          <Translate entry="hello world" />
        </h1>
      </header>
      <p className="small">
        <Translate entry="describe-App" />
      </p>
      <SelectLanguage />
      <SetLanguage />
      <LogTable />
      <SetHtmlLanguage />
    </div>
  );
};

render(<App />, window.document.body, rootEl);
