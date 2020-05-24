import { h, render } from 'preact';
import { useEffect } from 'preact/hooks';
import SelectLanguage from './SelectLanguage';
import SetLanguage from './SetLanguage';
import { Translate } from './translate';
import { LogTable, useLogStore } from './utils';

const rootEl = window.document.getElementById('root');

if (!rootEl) {
  throw new Error('root element with id "root" not found');
}

const App = () => {
  useEffect(() => useLogStore('justSetter')(App.name));

  return (
    <div>
      <h1>
        <Translate entry="hello world" />
      </h1>
      <SetLanguage />
      <SelectLanguage />
      <LogTable />
    </div>
  );
};

render(<App />, window.document.body, rootEl);
