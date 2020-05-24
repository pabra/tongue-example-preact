import { h } from 'preact';
import makeStore from 'react-hooksack';
import { Languages } from './translate';

const uniLet = {
  b: '\u{1F1E7}',
  d: '\u{1F1E9}',
  e: '\u{1F1EA}',
  f: '\u{1F1EB}',
  g: '\u{1F1EC}',
  r: '\u{1F1F7}',
  s: '\u{1F1F8}',
} as const;

export const flags: Record<Languages, string> = {
  en: uniLet.g + uniLet.b,
  de: uniLet.d + uniLet.e,
  es: uniLet.e + uniLet.s,
  fr: uniLet.f + uniLet.r,
} as const;

export const isInArray = <T,>(arr: Readonly<T[]>, item: any): item is T =>
  arr.indexOf(item) !== -1;

type Log = Record<string, number>;

const reducer = (state: Log, action: string) => {
  const count = (state[action] || 0) + 1;
  return { ...state, [action]: count };
};

export const useLogStore = makeStore<Log, typeof reducer>({}, reducer);

export const LogTable = () => {
  const log = useLogStore('justState');

  return (
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>render count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(log)
          .sort()
          .map(name => {
            const count = log[name];
            return (
              <tr key={name}>
                <td>{name}</td>
                <td style={{ textAlign: 'right' }}>{count}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
